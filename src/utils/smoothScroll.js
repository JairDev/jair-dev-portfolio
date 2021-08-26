import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function smoothScroll(content, viewport, smoothness) {
  const nodeParent = document.querySelectorAll("[data-height]");
  content = gsap.utils.toArray(content)[0];
  smoothness = smoothness || 1;

  gsap.set(viewport || content.parentNode, {
    overflow: "hidden",
    position: "fixed",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });
  gsap.set(content, { overflow: "visible", width: "100%" });

  let getProp = gsap.getProperty(content),
    setProp = gsap.quickSetter(content, "y", "px"),
    setScroll = ScrollTrigger.getScrollFunc(window),
    removeScroll = () => (content.style.overflow = "visible"),
    killScrub = (trigger) => {
      let scrub = trigger.getTween
        ? trigger.getTween()
        : gsap.getTweensOf(trigger.animation)[0]; // getTween() was added in 3.6.2
      scrub && scrub.kill();
      trigger.animation.progress(trigger.progress);
    },
    height,
    isProxyScrolling;

  function onResize() {
    height = content.clientHeight;
    document.body.style.height = height + "px";
  }
  onResize();

  ScrollTrigger.addEventListener("refreshInit", onResize);
  ScrollTrigger.addEventListener("refresh", () => {
    removeScroll();
    requestAnimationFrame(removeScroll);
  });
  ScrollTrigger.defaults({ scroller: content });
  ScrollTrigger.prototype.update = (p) => p; // works around an issue in ScrollTrigger 3.6.1 and earlier (fixed in 3.6.2, so this line could be deleted if you're using 3.6.2 or later)

  ScrollTrigger.scrollerProxy(content, {
    scrollTop(value) {
      if (arguments.length) {
        isProxyScrolling = true; // otherwise, if snapping was applied (or anything that attempted to SET the scroll proxy's scroll position), we'd set the scroll here which would then (on the next tick) update the content tween/ScrollTrigger which would try to smoothly animate to that new value, thus the scrub tween would impede the progress. So we use this flag to respond accordingly in the ScrollTrigger's onUpdate and effectively force the scrub to its end immediately.
        setProp(-value);
        setScroll(value);
        return;
      }
      return -getProp("y");
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  const setClass = (direction) => {
    if (direction < 0 && window.scrollY <= 0) {
      gsap.to("#nav-hidden", {
        backgroundColor: "var(--transparent-color)",
        boxShadow: "0px 4px 20px 8px rgba(177, 181, 202, 0)",
        duration: 0.5,
      });
    } else if (direction >= 1) {
      gsap.to("#nav-hidden", {
        yPercent: -200,
        duration: 0.5,
      });
    } else {
      gsap.to("#nav-hidden", {
        backgroundColor: "var(--body-color)",
        boxShadow: "0px 4px 20px 8px rgba(177, 181, 202, .2)",
        yPercent: 0,
        duration: 0.5,
      });
    }
  };

  gsap.timeline({
    scrollTrigger: {
      trigger: ["[data-phone]"],
      pin: true,
      start: "center 30%",
      end: "top -=550",
      scrub: true,
    },
  });

  gsap.utils.toArray("[data-img]").forEach((img, i) => {
    const arr = [...nodeParent][i];
    const sum = arr.clientHeight - arr.clientHeight / 3;
    if (window.innerWidth > 860) {
      gsap.to(img, {
        scrollTrigger: {
          trigger: img,
          pin: true,
          start: "top 20%",
          end: "+=" + sum,
          scrub: true,
          // markers: true,
        },
      });
    }
  });


  ScrollTrigger.refresh();

  return ScrollTrigger.create({
    animation: gsap.fromTo(
      content,
      { y: 0 },
      {
        y: () => document.documentElement.clientHeight - height,
        ease: "none",
        onUpdate: ScrollTrigger.update,
      }
    ),
    scroller: window,
    invalidateOnRefresh: true,
    start: 0,
    end: () => height - document.documentElement.clientHeight,
    scrub: smoothness,
    onUpdate: (self) => {
      setClass(self.direction);
      if (isProxyScrolling) {
        killScrub(self);
        isProxyScrolling = false;
      }
    },
    onRefresh: killScrub, // when the screen resizes, we just want the animation to immediately go to the appropriate spot rather than animating there, so basically kill the scrub.
  });
}
