"use client";

import { useState, useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import { motion } from "motion/react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import BlurText from "@/components/ui/BlurText";
import SocialCards from "@/components/ui/card-fan-carousel";

const testimonials = [
  {
    text: "Finally, a hoodie that actually feels like luxury. The weight is incredible, and it holds its shape perfectly even after dozens of washes.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "James L.",
    role: "London, UK",
  },
  {
    text: "The silhouette is unlike anything I've owned. It drapes perfectly and the oversized fit is exactly what I was looking for. Worth every penny.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Aisha R.",
    role: "New York, USA",
  },
  {
    text: "I've been searching for this quality for years. The 500GSM cotton is genuinely heavy and luxurious. The tonal embroidery is a beautiful touch.",
    image: "https://randomuser.me/api/portraits/men/58.jpg",
    name: "Kenji T.",
    role: "Tokyo, Japan",
  },
  {
    text: "Monolith is what slow fashion looks like. Minimal, intentional, and absolutely worth the investment. My most-worn piece this season.",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    name: "Clara M.",
    role: "Paris, France",
  },
  {
    text: "The packaging alone tells a story. When I pulled this hoodie out I knew it was different. The fabric is dense and the fit is architectural.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "Ethan K.",
    role: "Berlin, Germany",
  },
  {
    text: "I bought the Stone Gray and it's now my uniform. I get compliments every single time I wear it. The quality speaks for itself.",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    name: "Sofia B.",
    role: "Milan, Italy",
  },
  {
    text: "Ordered it on a Saturday, wore it by Tuesday. The fit is exactly as described — a true architectural oversized silhouette. Stunning piece.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Liam N.",
    role: "Sydney, Australia",
  },
  {
    text: "I was skeptical but this truly lives up to the hype. The brushed interior is impossibly soft and the exterior holds its structure all day.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Nour A.",
    role: "Dubai, UAE",
  },
  {
    text: "Monolith has an eye for detail. The ribbed cuffs, the weight, the length — everything is considered. This is what premium streetwear means.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    name: "Marcus V.",
    role: "Amsterdam, NL",
  },
  {
    text: "The structure of the shoulders is impeccable. It fits oversized but doesn't look sloppy. It has that crisp, architectural drape that is hard to find.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Helena G.",
    role: "Copenhagen, Denmark",
  },
  {
    text: "This hoodie is heavy. When you put it on, you feel like you are wearing a piece of art. The stitching details are flawless.",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
    name: "Julian F.",
    role: "Zurich, Switzerland",
  },
  {
    text: "A masterclass in minimal streetwear. The fabric is dense and substantial, holding its shape better than any luxury brand I own.",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    name: "Yuki S.",
    role: "Kyoto, Japan",
  },
  {
    text: "Uncompromising quality. From the heavy drawstring-free hood to the thick ribbing, it's clear no corners were cut.",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
    name: "Mateo R.",
    role: "Barcelona, Spain",
  },
  {
    text: "Finally, a brand that gets oversized fit right. It's boxy, heavy, and extremely comfortable. Essential for my daily rotation.",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    name: "Chloe W.",
    role: "Vancouver, Canada",
  },
  {
    text: "Worth every single cent. The stone grey has a beautiful earthy tone that pairs with anything. Will definitely buy the black next.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Leo K.",
    role: "Stockholm, Sweden",
  }
];

const lookbookCards = [
  { imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyXkgb42kZUbYov3wW-01trg6E6ROVNGzLJgw_NhwV_wsQIdo7zgCY5mcyp_acDKrRluYKyvcaf0KiYbrWuxPpGRc40GIDNCyFepEf_ZystpIZr1t9AGabHkGw5oAYu2XFFUMqqob8_B1BYaRPDtfAKksrMFLd76uRZE29lDklhPL4fuD-h35Kt53qQnI8GE1Cj1rSK4XXBSI7Zxxv8jQ1MGnfiGSERrbJq85wciJqI3Nmqpm7_GtICwzymdSd3LghvJSbWaaTEAs", alt: "The Airport Fit" },
  { imgUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=900&fit=crop", alt: "Sage Green Oversized Style" },
  { imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDPhVqXTAsrn672qdF_bB-SvEtRrqLTdeR_D3IrczHdSjYr6MYt4z0LzfTGx9gY7H1EmDZQ5upsynf-TtnLCPdHjYVFZYIYhKHeGEnEWuIL1YBfc8bS04pr3zLXSOGTzc_hNS1n1ji3sbKQ07mS7joBlZLblwr9MZ9xDbzFytJnAQRtWbnBetyuEnoPVzBOM9peHspKkIPWZaHZoFRB7jmaybVc8zIURZRtiUh1cRq2dd8PQ5hGLUrzOqgXlDFn3S24IfeIUSJn3o", alt: "The Winter Layer" },
  { imgUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=900&fit=crop", alt: "Street Style Oatmeal" },
  { imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWknQO3ZV841TgoLnPYPdEpXal1d6_TSc8KUMKMeJYZxMnqZFIl2QqF6QvNW4_uutxLg7s1TSvdJqqaT1YRfxVaUHsydfTsJj14POtavthZfXRcxeG7af7j_mT28_IVo3M16WD2gaOVllfQWTe_gGaxJqJEfuJj7UqLG1fNXLOcb7c4EJHPv61pZA2Tb4tiGBUq7Oev9ko_RogBiaHTBmc6bQKs-VwwU9ZJeuu96l-cFFAE5AD7a8raRocXeSsxdMjSIHgctCVMrM", alt: "Monochrome Minimalist" },
  { imgUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=900&fit=crop", alt: "Editorial Hoodie Drape" },
  { imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBr9rH8PFCPAWvKJIkAfC--zfewsZClr1ne3pyUVJHs-1lOVJdTJLVMiINJWKOaxA7B7S4elTPZeYF1y9tu1EzxPL2V4l7qXYVWay4XOFaHDbefGRYBNhd18UQvRYvATM1foGUdPpVlwt_AKWXxXunIc_36TzOxH97EkkBJiwa064MrGtt0EZJZK9dFrNiA6Hy08Xa1Zq9SPORnXKOdAW3LrqJaAX_DiMRmppXuZKfc66fL-Dd988s3AdxJziaYcz64cfgIu_dVXkw", alt: "The Weekend Essential" },
  { imgUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=900&fit=crop", alt: "Architectural Outerwear" },
  { imgUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=900&fit=crop", alt: "Neutral Silhouette Coat" },
  { imgUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&h=900&fit=crop", alt: "Minimal Studio Setup" }
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);
const fourthColumn = testimonials.slice(9, 12);
const fifthColumn = testimonials.slice(12, 15);

export default function Home() {
  // STATE
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Theme Toggle Logic
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const useDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark);
    setIsDarkMode(useDark);
    if (useDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDarkMode;
    setIsDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  
  // Overlay States
  const [searchOpen, setSearchOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  
  // Search State
  const [searchQuery, setSearchQuery] = useState("");

  // Checkout Steps
  const [checkoutStep, setCheckoutStep] = useState("cart"); // "cart", "checkout", "processing", "success"
  const [shippingInfo, setShippingInfo] = useState({ name: "", email: "", address: "", city: "", zip: "" });
  const [paymentInfo, setPaymentInfo] = useState({ cardNumber: "", expiry: "", cvc: "" });
  const [orderId, setOrderId] = useState("");

  // Customizer States
  const [selectedColor, setSelectedColor] = useState("Alabaster Cream");
  const [selectedSize, setSelectedSize] = useState("M");
  const [isAdding, setIsAdding] = useState(false);
  const [bagButtonText, setBagButtonText] = useState("ADD TO BAG — $180");

  // REFS
  const canvasRef = useRef(null);
  const scrollSectionRef = useRef(null);
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);

  // Narrative Text Refs (for Hero overlays)
  const block1Ref = useRef(null);
  const block2Ref = useRef(null);
  const block3Ref = useRef(null);
  const block4Ref = useRef(null);

  // Editorial Sidebars
  const sidebarLeftRef = useRef(null);
  const sidebarRightRef = useRef(null);

  // 1. IMAGE PRELOADING
  useEffect(() => {
    const totalFrames = 240;
    const images = [];
    let loadedCount = 0;

    const handleLoad = () => {
      loadedCount++;
      const progress = Math.round((loadedCount / totalFrames) * 100);
      setLoadingProgress(progress);
      
      if (loadedCount === totalFrames) {
        setTimeout(() => {
          setIsLoading(false);
        }, 600); // Aesthetic fade-out delay
      }
    };

    for (let i = 1; i <= totalFrames; i++) {
      const frameNum = i.toString().padStart(3, '0');
      const imgPath = `/images/${frameNum}.png`;
      const img = new Image();
      img.src = imgPath;
      img.onload = handleLoad;
      img.onerror = () => {
        console.error(`Failed to load image at: ${imgPath}`);
        handleLoad(); // Continue loading to avoid preloader block
      };
      images.push(img);
    }

    imagesRef.current = images;
  }, []);

  // 2. ANIMATION AND INTERPOLATION LOOP
  useEffect(() => {
    if (isLoading) return;

    const canvas = canvasRef.current;
    const section = scrollSectionRef.current;
    if (!canvas || !section) return;
    let animId;

    // Aspect-ratio cover drawing calculation (to fill the canvas and remove empty sides)
    const drawImageProp = (ctx, img, x, y, w, h, cx = 0.5, cy = 0.5) => {
      const imgWidth = img.naturalWidth || img.width;
      const imgHeight = img.naturalHeight || img.height;
      if (imgWidth === 0 || imgHeight === 0) return;

      const r = Math.max(w / imgWidth, h / imgHeight);
      const nw = imgWidth * r;
      const nh = imgHeight * r;

      const nx = x + (w - nw) * cx;
      const ny = y + (h - nh) * cy;

      ctx.drawImage(img, nx, ny, nw, nh);
    };

    const renderFrame = () => {
      const frameIndex = Math.round(currentFrameRef.current);
      const img = imagesRef.current[frameIndex];
      const canvasEl = canvasRef.current;
      if (canvasEl && img && img.complete) {
        const context = canvasEl.getContext("2d");
        const cw = window.innerWidth;
        const ch = window.innerHeight;
        context.clearRect(0, 0, cw, ch);
        drawImageProp(context, img, 0, 0, cw, ch);
      }
    };

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollableHeight = section.offsetHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      // Clamp progress strictly between 0.0 (start of section) and 1.0 (end of section)
      const progress = Math.min(1, Math.max(0, -rect.top / scrollableHeight));
      
      // Calculate target frame index (0 to 239)
      targetFrameRef.current = Math.min(239, Math.floor(progress * 240));
    };

    const toggleBlockRef = (ref, isActive) => {
      if (ref.current) {
        if (isActive) {
          ref.current.classList.add("active");
        } else {
          ref.current.classList.remove("active");
        }
      }
    };

    const updateLoop = () => {
      const targetFrame = targetFrameRef.current;
      let currentFrame = currentFrameRef.current;
      const diff = targetFrame - currentFrame;

      if (Math.abs(diff) < 0.005) {
        currentFrame = targetFrame;
      } else {
        // Easing interpolation
        currentFrame += diff * 0.085;
      }

      currentFrameRef.current = currentFrame;

      // Draw active frame
      renderFrame();

      // Trigger text blocks opacity transitions
      const frameIndex = Math.round(currentFrame);
      toggleBlockRef(block1Ref, frameIndex >= 0 && frameIndex <= 36);
      toggleBlockRef(block2Ref, frameIndex >= 48 && frameIndex <= 112);
      toggleBlockRef(block3Ref, frameIndex >= 124 && frameIndex <= 184);
      toggleBlockRef(block4Ref, frameIndex >= 196 && frameIndex <= 240);

      // Trigger sidebar opacity transitions
      const showSidebars = frameIndex >= 0 && frameIndex <= 36;
      if (sidebarLeftRef.current) {
        if (showSidebars) sidebarLeftRef.current.classList.add("active");
        else sidebarLeftRef.current.classList.remove("active");
      }
      if (sidebarRightRef.current) {
        if (showSidebars) sidebarRightRef.current.classList.add("active");
        else sidebarRightRef.current.classList.remove("active");
      }

      animId = requestAnimationFrame(updateLoop);
    };

    const resizeCanvas = () => {
      const canvasEl = canvasRef.current;
      if (!canvasEl) return;
      
      // Retina DPI Scaling
      const dpr = window.devicePixelRatio || 1;
      canvasEl.width = window.innerWidth * dpr;
      canvasEl.height = window.innerHeight * dpr;
      canvasEl.style.width = window.innerWidth + "px";
      canvasEl.style.height = window.innerHeight + "px";
      
      const context = canvasEl.getContext("2d");
      context.scale(dpr, dpr);
      renderFrame();
    };

    // Bind event listeners
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Initial setups
    resizeCanvas();
    onScroll();

    // Start ticker loop
    animId = requestAnimationFrame(updateLoop);

    // Cleanup listeners
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isLoading]);

  // 3. INTERACTIVE ACTIONS
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleScrollToSection = (e, selector) => {
    e.preventDefault();
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  // Sync Cart Count automatically
  useEffect(() => {
    const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);
    setCartCount(totalQty);
  }, [cartItems]);

  const handleAddToBag = () => {
    setIsAdding(true);
    setBagButtonText("ADDING TO BAG...");
    
    setTimeout(() => {
      setBagButtonText("ADDED TO BAG ✓");
      const newItem = {
        id: Date.now(),
        name: "Luxury Oversized Hoodie",
        variant: `${selectedColor} / ${selectedSize}`,
        price: "$180.00",
        qty: 1,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzbzr_8s7bNQcHkfVaT_bg7Hps3HO-bql35fODbLPTmqRwgTMldNCGzH7lZ0F5ICaTXot-kHNUaH0kGDEjUdLDUOwtqc4y_1IT5FQu81aMyZpaSVFsHHahKKzy4QQLRwHyf32CTciT7nB9yC8i3edqG6bdv5X8T1a8ucZkWNUaHSk25ZbiGEhkQQ0wHZ5wXTtDVAXJNo8yGUxA9dxt88xuQcjHqdyPexRbp3TjMtprG66kBIKgosF05SI4fh9GRTxrjr8L_y7gm8s"
      };
      setCartItems(prev => {
        const existing = prev.find(item => item.name === newItem.name && item.variant === newItem.variant);
        if (existing) {
          return prev.map(item => item.id === existing.id ? { ...item, qty: item.qty + 1 } : item);
        }
        return [...prev, newItem];
      });
      setTimeout(() => {
        setIsAdding(false);
        setBagButtonText("ADD TO BAG — $180");
        setBagOpen(true);
      }, 800);
    }, 1200);
  };

  const handleUpdateQty = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, qty: newQty } : item));
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (e) => {
    let { name, value } = e.target;
    if (name === "cardNumber") {
      value = value.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim().substring(0, 19);
    } else if (name === "expiry") {
      value = value.replace(/\D/g, '').replace(/(\d{2})/g, '$1/').trim().substring(0, 5);
      if (value.endsWith("/")) value = value.slice(0, -1);
    } else if (name === "cvc") {
      value = value.replace(/\D/g, '').substring(0, 3);
    }
    setPaymentInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    if (!shippingInfo.name || !shippingInfo.email || !shippingInfo.address || !shippingInfo.city || !shippingInfo.zip) {
      alert("Please fill in all shipping fields.");
      return;
    }
    setCheckoutStep("checkout");
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (paymentInfo.cardNumber.replace(/\s/g, '').length < 16 || paymentInfo.expiry.replace(/\//g, '').length < 4 || paymentInfo.cvc.length < 3) {
      alert("Please fill in card details correctly.");
      return;
    }
    setCheckoutStep("processing");
    setTimeout(() => {
      const mockId = "MONO-" + Math.floor(100000 + Math.random() * 900000);
      setOrderId(mockId);
      setCheckoutStep("success");
    }, 2000);
  };

  // Close overlays on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setBagOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <ReactLenis root>
      <div className="bg-background-light dark:bg-background-dark text-stone-900 dark:text-stone-100 font-sans antialiased">
        
        {/* 1. Preloader Overlay */}
        <div id="preloader" className={`preloader ${!isLoading ? "fade-out" : ""}`}>
          <div className="preloader-content">
            <h2 className="preloader-brand">MONOLITH</h2>
            <p className="preloader-sub">ARCHITECTURAL SILHOUETTES</p>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: `${loadingProgress}%` }}></div>
            </div>
            <div className="progress-percentage">{loadingProgress.toString().padStart(2, "0")}%</div>
          </div>
        </div>

        {/* 2. Glassmorphic Navigation Header */}
        <nav className="fixed top-0 w-full z-50 glass-nav">
          <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
            <div className="flex-1 flex gap-8 hidden md:flex">
              <a className="text-[13px] font-normal tracking-wide hover:opacity-50 transition-all" href="#shop" onClick={(e) => handleScrollToSection(e, '.purchase-card')}>Shop</a>
              <a className="text-[13px] font-normal tracking-wide hover:opacity-50 transition-all" href="#about" onClick={(e) => handleScrollToSection(e, '#about')}>About</a>
              <a className="text-[13px] font-normal tracking-wide hover:opacity-50 transition-all" href="#look" onClick={(e) => handleScrollToSection(e, '#lookbook')}>Lookbook</a>
            </div>
            <div className="flex-shrink-0">
              <button onClick={handleLogoClick} className="logo-header font-semibold text-lg hover:opacity-60 transition-opacity tracking-[0.25em]">MONOLITH</button>
            </div>
            <div className="flex-1 flex justify-end gap-6 items-center">
              <button
                onClick={toggleTheme}
                className="material-symbols-outlined text-xl hover:opacity-50 transition-opacity cursor-pointer"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? "light_mode" : "dark_mode"}
              </button>
              <button
                onClick={() => setSearchOpen(true)}
                className="material-symbols-outlined text-xl hover:opacity-50 transition-opacity cursor-pointer"
                aria-label="Search"
              >search</button>
              <button
                onClick={() => setBagOpen(true)}
                className="relative material-symbols-outlined text-xl hover:opacity-50 transition-opacity cursor-pointer"
                aria-label="Shopping Bag"
              >
                shopping_bag
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-stone-900 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold not-italic leading-none" style={{fontFamily: 'var(--font-sans)', fontSize: '9px'}}>
                    {cartCount}
                  </span>
                )}
              </button>
              <button className="md:hidden material-symbols-outlined text-xl hover:opacity-50 transition-opacity cursor-pointer" aria-label="Menu">menu</button>
            </div>
          </div>
        </nav>

        {/* 3. Hero 3D Scroll Section */}
        <section ref={scrollSectionRef} className="scroll-container relative w-full h-[500vh]">
          
          {/* Sticky Canvas & Text Container */}
          <div className="sticky-viewport">
            <canvas ref={canvasRef} id="animation-canvas"></canvas>
            <div className="canvas-overlay"></div>

            {/* Editorial Sidebars */}
            <div ref={sidebarLeftRef} className="editorial-sidebar editorial-sidebar-left flex-desktop active">
              <span className="text-[10px] tracking-[0.4em] uppercase font-semibold [writing-mode:vertical-lr] rotate-180">500GSM ITALIAN COTTON</span>
              <div className="w-[1px] h-16 bg-ink/30 dark:bg-white/30"></div>
              <span className="text-[10px] tracking-[0.2em] font-light">01</span>
            </div>

            <div ref={sidebarRightRef} className="editorial-sidebar editorial-sidebar-right flex-desktop active">
              <span className="text-[10px] tracking-[0.2em] font-light">03</span>
              <div className="w-[1px] h-16 bg-ink/30 dark:bg-white/30"></div>
              <span className="text-[10px] tracking-[0.4em] uppercase font-semibold [writing-mode:vertical-lr]">HEAVYWEIGHT CONSTRUCTION</span>
            </div>

            {/* Slide 1: Hero Intro */}
            <div ref={block1Ref} className="narrative-block" id="narrative-1">
              <div className="narrative-inner center-text">
                <span className="sub-heading">Built for Comfort. Styled for Presence.</span>
                <BlurText
                  text="THE MONOLITH HOODIE"
                  animateBy="words"
                  direction="top"
                  delay={120}
                  stepDuration={0.4}
                  className="main-heading"
                />
                <p className="paragraph">Heavyweight premium fabric meets an architectural silhouette. Everyday luxury, redefined.</p>
                <div className="scroll-indicator">
                  <span className="mouse-icon">
                    <span className="mouse-wheel"></span>
                  </span>
                  <span className="scroll-text">SCROLL TO UNFOLD</span>
                </div>
              </div>
            </div>

            {/* Slide 2: Fabric Material */}
            <div ref={block2Ref} className="narrative-block" id="narrative-2">
              <div className="narrative-inner glass-card left-card">
                <span className="card-num">01</span>
                <span className="sub-heading">TECHNICAL EXCELLENCE</span>
                <h2 className="section-heading">Heavyweight 500GSM</h2>
                <p className="paragraph">Meticulously woven from premium Italian cotton. High-density interlock weave for structural integrity and maximum longevity.</p>
              </div>
            </div>

            {/* Slide 3: Construction & Details */}
            <div ref={block3Ref} className="narrative-block" id="narrative-3">
              <div className="narrative-inner glass-card right-card">
                <span className="card-num">02</span>
                <span className="sub-heading">ARCHITECTURAL FIT</span>
                <h2 className="section-heading">Double-Layered Hood</h2>
                <p className="paragraph">Engineered to maintain its shape, providing a clean architectural frame for the face. Features a seamless kangaroo pocket.</p>
              </div>
            </div>

            {/* Slide 4: CTA Customizer Card */}
            <div ref={block4Ref} className="narrative-block" id="narrative-4">
              <div className="narrative-inner glass-card purchase-card">
                <span className="card-num">03</span>
                <span className="sub-heading">THE COLLECTION</span>
                <h2 className="section-heading">Elevate Your Layering</h2>
                <p className="paragraph">Available in 8 curated colors. Meticulously dyed for a deep, long-lasting architectural tone.</p>
                
                <div className="purchase-customizer">
                  <div className="customizer-group">
                    <span className="customizer-label">Color: <strong>{selectedColor}</strong></span>
                    <div className="color-options flex flex-wrap gap-2">
                      {[
                        { name: "Alabaster Cream", value: "#F9F7F2" },
                        { name: "Oatmeal Cream", value: "#E5D3C3" },
                        { name: "Stone Grey", value: "#BDB9AA" },
                        { name: "Sage Green", value: "#8B9B90" },
                        { name: "Espresso Brown", value: "#3E2723" },
                        { name: "Midnight Navy", value: "#1A237E" },
                        { name: "Charcoal Heather", value: "#37474F" },
                        { name: "Monolith Black", value: "#1A1A1A" }
                      ].map((col) => (
                        <button 
                          key={col.name}
                          onClick={() => setSelectedColor(col.name)}
                          className={`color-btn ${selectedColor === col.name ? "active" : ""}`} 
                          style={{ backgroundColor: col.value }} 
                          aria-label={`Select ${col.name}`}>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="customizer-group">
                    <span className="customizer-label">Size: <strong>{selectedSize}</strong></span>
                    <div className="size-options">
                      {["S", "M", "L", "XL"].map((sz) => (
                        <button 
                          key={sz}
                          onClick={() => setSelectedSize(sz)}
                          className={`size-btn ${selectedSize === sz ? "active" : ""}`}>
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleAddToBag}
                  disabled={isAdding}
                  className="btn btn-primary" 
                  id="btn-add-to-bag">
                  {bagButtonText}
                </button>
                
                <div className="shipping-info">Complimentary shipping and 30-day returns.</div>
              </div>
            </div>

          </div>
        </section>

        {/* 4. Philosophy Section */}
        <section id="about" className="py-32 bg-background-light text-ink relative z-20 overflow-hidden transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] bg-stone-100 overflow-hidden rounded-2xl group shadow-sm"
            >
              <img 
                alt="Minimalist luxury wardrobe setting" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbpYe78ixG4ErdqwZRf8b5ayvugAiUFclUfc-92V9UAjBBRUCjdsyeXA3bz7Mgv006P_efr7pGYkZYmJ5X9qFLOipqnDL2nVmohUcCvv-50R_GESNaY8IvdlfgEGct262fjh7rVT0cZ2kkmS8csrQzTLDcHvhmizwj-Uityfa_epsSsbfgFLXFu-0h23qi_0heq-1rp0Zc70If8uI_YGEuPekMNT4jHa1XdS2hL-oCNtDs1opOcl2u3fCoR0VfgqLf99Vku0tv2pg"
              />
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                  }
                }
              }}
              className="space-y-8"
            >
              <motion.span 
                variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className="text-xs uppercase tracking-[0.3em] text-ink-muted-48 block"
              >
                The Philosophy
              </motion.span>
              <motion.h2 
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                className="text-4xl md:text-5xl font-display leading-tight font-semibold"
              >
                Designed for those who command space and value silence.
              </motion.h2>
              <motion.p 
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                className="text-ink-muted-80 leading-loose text-lg font-light"
              >
                The Monolith Hoodie is more than a garment; it is a sanctuary. We've stripped away the noise of fast fashion to focus on the essential: the relationship between the body, the fabric, and the environment.
              </motion.p>
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className="pt-4"
              >
                <a className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80 transition-opacity" href="#">
                  Discover Our Story
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 5. Features Grid Section */}
        <section className="py-24 px-6 bg-stone-950 text-white relative z-20 overflow-hidden">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                }
              }
            }}
            className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: "layers", title: "Heavyweight 500GSM", desc: "Premium Italian Cotton" },
              { icon: "architecture", title: "Architectural Fit", desc: "Structural Oversized Form" },
              { icon: "texture", title: "Brushed Interior", desc: "Cloud-like Softness" },
              { icon: "flare", title: "Minimal Detail", desc: "Tonal Embroidered Logo" }
            ].map((feat, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
                }}
                whileHover={{ 
                  y: -6, 
                  backgroundColor: "rgba(255, 255, 255, 0.05)", 
                  borderColor: "rgba(255, 255, 255, 0.12)",
                  transition: { duration: 0.25, ease: "easeOut" } 
                }}
                className="flex flex-col items-center text-center space-y-4 bg-stone-900/30 border border-white/5 backdrop-blur-md rounded-2xl p-8 cursor-default group transition-colors duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-stone-900/50 flex items-center justify-center border border-white/5 group-hover:border-primary-on-dark/30 group-hover:bg-stone-900 transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl text-primary-on-dark group-hover:scale-110 transition-transform duration-300" style={{ filter: "drop-shadow(0 0 4px rgba(41, 151, 255, 0.15))" }}>
                    {feat.icon}
                  </span>
                </div>
                <h3 className="text-sm uppercase tracking-widest font-semibold text-stone-100 group-hover:text-white transition-colors">{feat.title}</h3>
                <p className="text-[11px] text-stone-400 uppercase tracking-tighter group-hover:text-stone-300 transition-colors">{feat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 6. Technical Excellence (Construction) Section */}
        <section className="bg-canvas-parchment text-ink py-32 relative z-20 overflow-hidden transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-ink-muted-48">Construction</span>
                <h2 className="text-4xl font-display mt-2 font-semibold">Technical Excellence</h2>
              </div>
              <a className="text-sm font-semibold text-primary hover:opacity-80 transition-opacity flex items-center gap-1 group" href="#">
                Size &amp; Fit Guide
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                  }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Interlock Weave",
                  desc: "High-density 500GSM weave for structural integrity and maximum longevity.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKnfDzcxR1JYKzZTXsofKhw0RewlBoF29yYxVgQVnitotjeljkz6EPh68xy0MfS-Q_5F-GB8vXQ-ROJzBNdveJ3esKQtQQFiKhmpIRQ117YwKTgltVjl04RwVtGTHnKyir3Q0JNRDVZs8_7rJBfdBhTY5wgSPWRJ48JTCD8xJjmgEN10Co33ZQLxd4i4Qz1BWhV2D2ZmrdGVS3Xxr7l5adEsWMRboVbTG0DY8kW5AstMBCFEpAg7WLzG_ARmuliPP9mo0Cw3bv6lg",
                  alt: "Close up of fabric weave",
                  offset: false
                },
                {
                  title: "Double-Layered Hood",
                  desc: "Engineered to maintain its shape, providing a clean, architectural frame for the face.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwlDwpIkyhdMD9kIG5ecyRsNHrB45MzNGboV9N9F6pOJ5nUziCjNdbwKYG_jgG0T9Muqn0nOIljgPpcBJ2Kr3wUZMTt78R3O2EdOhm53oIDVXdXU19zAZZ_sJjhdgetzaad0H8ZY4trYENf3REa41KnXHiKnlIMc60phEX87YIl_Mqjuw5zVjtY41OqBY9KN9w4Q8GZWHjqPi-u4Nlm1XrtsyA71Qb-dIjCoPfZb2VzvUKMapFWa6b1liJ2ia68iTAQCYK-GoJ4Bw",
                  alt: "Double layered hood",
                  offset: true
                },
                {
                  title: "Hidden Utility",
                  desc: "Seamless kangaroo pocket and reinforced stitching at all stress points.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFLd17bs8SU76qKbpvlN2OWLb6StaVuyT3TgKDvLm314OkmZME1y7ZA6IXG9-vLh4Kj78-vBIpb3kLkmfW8S38rvYLiqH9ZC1K36YvR4dz24_E7Z9uETksddc0jJFd8UW6wy5nuORYcQq-u5GPnJKwC4LnZrxNiLyo_wLusVDvLFKINBUReRJy2p4JgOn83pNioygQY7L08mISsMFGpws7mXUqdHxIyFCAKB7OFZJYwaerYM-uO_qLBoCrX95mey6MLtGzCYbyL1I",
                  alt: "Ribbed cuffs detail",
                  offset: false
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] }
                  }}
                  className={`group cursor-pointer bg-surface-pearl rounded-2xl p-4 border border-hairline shadow-sm hover:shadow-md transition-all duration-300 ${card.offset ? "md:mt-8" : ""}`}
                >
                  <div className="aspect-square bg-stone-100 overflow-hidden mb-6 rounded-xl">
                    <img 
                      alt={card.alt} 
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]" 
                      src={card.img}
                    />
                  </div>
                  <h4 className="text-lg font-display mb-2 font-semibold text-stone-900 group-hover:text-primary transition-colors">{card.title}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed font-light">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 7. The Monolith Look (Lookbook) Section */}
        <section id="lookbook" className="py-32 px-6 relative z-20 bg-surface-tile-2 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl mx-auto h-[70px] md:h-[120px] flex flex-col justify-end items-center overflow-visible select-none -mb-12 md:-mb-24 z-30"
            >
              <svg viewBox="0 0 1000 130" className="w-full h-full overflow-visible fill-current text-white">
                <path id="lookbook-curve" d="M 50,120 Q 500,10 950,120" fill="none" />
                <text className="font-display font-semibold tracking-[0.16em] text-[54px] md:text-[90px]">
                  <textPath href="#lookbook-curve" startOffset="50%" textAnchor="middle">
                    THE MONOLITH LOOK
                  </textPath>
                </text>
              </svg>
            </motion.div>
            <SocialCards cards={lookbookCards} />
          </div>
        </section>

        {/* 8. Testimonials Section */}
        <section className="py-28 bg-canvas-parchment text-ink relative z-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-14"
            >
              <div className="flex justify-center mb-4">
                <div className="border border-stone-300 py-1 px-4 rounded-full text-[11px] tracking-[0.15em] uppercase text-stone-500 font-semibold">
                  Testimonials
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold tracking-tight text-center mt-2">
                Worn and loved worldwide
              </h2>
              <p className="text-center mt-4 text-stone-500 font-light text-sm leading-relaxed">
                Real reviews from customers who chose quality over everything.
              </p>
            </motion.div>
          </div>

          <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[700px] overflow-hidden w-full px-6">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
            <TestimonialsColumn testimonials={fourthColumn} className="hidden xl:block" duration={21} />
            <TestimonialsColumn testimonials={fifthColumn} className="hidden 2xl:block" duration={14} />
          </div>
        </section>

        {/* 9. Final Banner Call to Action */}
        <section className="relative py-48 overflow-hidden relative z-20">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Minimalist clothing rack with neutral tones" 
              className="w-full h-full object-cover object-center transform scale-110" 
              src="https://images.unsplash.com/photo-1505022610485-0249ba5b3675?w=1600&auto=format&fit=crop&q=80"
            />
            <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative z-10 text-center px-6">
            <h2 className="text-4xl md:text-6xl font-display text-white mb-8 font-semibold">Your everyday essential, elevated.</h2>
            <a 
              onClick={(e) => handleScrollToSection(e, '.purchase-card')}
              className="inline-block bg-white text-ink px-10 py-4 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-stone-100 transition-all transform active:scale-95 cursor-pointer" 
              href="#shop">
              Buy Now
            </a>
          </div>
        </section>

        {/* 10. Footer Section */}
        <footer className="bg-stone-950 border-t border-stone-900 pt-20 pb-10 px-6 relative z-20 text-stone-200">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-stone-200">
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-stone-500">About</h4>
              <p className="text-stone-400 text-sm leading-relaxed font-light">Redefining streetwear through architectural design and uncompromising quality.</p>
            </div>
            
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-stone-500">Navigation</h4>
              <ul className="space-y-3 text-[14px] leading-[2.41] text-stone-400">
                <li><a className="hover:text-white transition-colors font-light" href="#">Shop All</a></li>
                <li><a className="hover:text-white transition-colors font-light" href="#">New Arrivals</a></li>
                <li><a className="hover:text-white transition-colors font-light" href="#">Archive</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-stone-500">Support</h4>
              <ul className="space-y-3 text-[14px] leading-[2.41] text-stone-400">
                <li><a className="hover:text-white transition-colors font-light" href="#">Shipping</a></li>
                <li><a className="hover:text-white transition-colors font-light" href="#">Returns</a></li>
                <li><a className="hover:text-white transition-colors font-light" href="#">Size Guide</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-stone-500">Connect</h4>
              <div className="flex gap-4 mb-6 text-[14px]">
                <a className="text-stone-400 hover:text-white transition-colors font-light" href="#">Instagram</a>
                <a className="text-stone-400 hover:text-white transition-colors font-light" href="#">Pinterest</a>
              </div>
              <div className="relative">
                <input 
                  className="w-full bg-transparent border-b border-stone-800 py-2 text-sm focus:outline-none focus:border-white font-light text-white placeholder-stone-600" 
                  placeholder="Join the list" 
                  type="email"
                />
                <button aria-label="Subscribe" className="absolute right-0 top-2 text-stone-500 hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-lg">east</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Giant full-stretch brand logo title */}
          <div className="w-full overflow-hidden mt-20 select-none border-t border-stone-900/50 pt-12">
            <h1 className="footer-brand-giant select-none">
              MONOLITH
            </h1>
          </div>
          
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-stone-900/30 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-stone-500">
            <p>© 2026 MONOLITH STUDIOS. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 font-light">
              <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
            </div>
          </div>
        </footer>

        {/* ── SEARCH OVERLAY ── */}
        <div
          id="search-overlay"
          className={`fixed inset-0 z-[80] flex flex-col items-center transition-all duration-500 bg-[#faf9f7]/97 dark:bg-stone-950/97 backdrop-blur-[24px] ${
            searchOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Close */}
          <div className="w-full flex justify-end px-8 md:px-16 pt-6">
            <button
              onClick={() => setSearchOpen(false)}
              className="p-2 hover:opacity-50 transition-opacity cursor-pointer"
              aria-label="Close search"
            >
              <span className="material-symbols-outlined text-[32px] text-stone-900 dark:text-stone-100">close</span>
            </button>
          </div>

          {/* Search Input */}
          <div className="w-full max-w-[720px] px-6 mt-10 md:mt-20">
            <div className="relative">
              <input
                autoFocus={searchOpen}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search the collection..."
                className="w-full bg-transparent border-b-2 border-stone-300 dark:border-stone-800 py-4 text-3xl md:text-4xl text-center text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:border-stone-900 dark:focus:border-stone-100 transition-all duration-500"
                style={{ fontFamily: "var(--font-cormorant), serif", letterSpacing: "-0.01em" }}
              />
            </div>

            {/* Suggested Searches */}
            <div className="mt-10 text-center">
              <p className="text-[11px] tracking-[0.2em] uppercase text-stone-400 mb-4 font-semibold">
                Suggested Searches
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Hoodie", "Trouser", "Mockneck", "Trench"].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchQuery(term)}
                    className="px-6 py-2 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-[11px] tracking-[0.12em] uppercase font-semibold text-stone-700 dark:text-stone-300 rounded-full hover:bg-stone-900 dark:hover:bg-stone-100 hover:text-white dark:hover:text-stone-900 hover:border-stone-900 dark:hover:border-stone-100 transition-all duration-300 cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* Filtered Search Results */}
            {searchQuery.trim() !== "" && (
              <div className="mt-12 space-y-6 max-h-[350px] overflow-y-auto pr-2">
                <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400 font-semibold text-center mb-4">
                  Search Results
                </p>
                {[
                  {
                    name: "Luxury Oversized Hoodie",
                    price: "$180.00",
                    color: "Alabaster Cream / Stone Grey / Monolith Black",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzbzr_8s7bNQcHkfVaT_bg7Hps3HO-bql35fODbLPTmqRwgTMldNCGzH7lZ0F5ICaTXot-kHNUaH0kGDEjUdLDUOwtqc4y_1IT5FQu81aMyZpaSVFsHHahKKzy4QQLRwHyf32CTciT7nB9yC8i3edqG6bdv5X8T1a8ucZkWNUaHSk25ZbiGEhkQQ0wHZ5wXTtDVAXJNo8yGUxA9dxt88xuQcjHqdyPexRbp3TjMtprG66kBIKgosF05SI4fh9GRTxrjr8L_y7gm8s"
                  },
                  {
                    name: "Monolith Cargo Trouser",
                    price: "$180.00",
                    color: "Sandstone / Olive / Ink Black",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8dXrMRClNy28Q9nCMLCyQcPUSyugxNwXjytVTihx-I7F9gOZ_mV1TSszjBgNG4pWFCCDkATCVaSaerBMmBN_T61Kr2yyCSXHRr-DI9zPVcs8bbdSMZwuuYXVBJhQ-WaU6MlebhOByFZ2Dd1EhovCwANplaaSy4e2Iq928DCvoQNmexsqLJUBcWOw4UZzz-6VL1ixumvGsTkE7MbCL1jyEJ7fLxwC7GkDxxkWmQfcVMxUYINDZ8BsCW2oXtiDtCM9DZgg1bx3ok1U"
                  },
                  {
                    name: "Architectural Mockneck",
                    price: "$120.00",
                    color: "Fog Grey / Off-White / Charcoal",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKnfDzcxR1JYKzZTXsofKhw0RewlBoF29yYxVgQVnitotjeljkz6EPh68xy0MfS-Q_5F-GB8vXQ-ROJzBNdveJ3esKQtQQFiKhmpIRQ117YwKTgltVjl04RwVtGTHnKyir3Q0JNRDVZs8_7rJBfdBhTY5wgSPWRJ48JTCD8xJjmgEN10Co33ZQLxd4i4Qz1BWhV2D2ZmrdGVS3Xxr7l5adEsWMRboVbTG0DY8kW5AstMBCFEpAg7WLzG_ARmuliPP9mo0Cw3bv6lg"
                  },
                  {
                    name: "Modular Wool Trench",
                    price: "$350.00",
                    color: "Monolith Black / Camel",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDPhVqXTAsrn672qdF_bB-SvEtRrqLTdeR_D3IrczHdSjYr6MYt4z0LzfTGx9gY7H1EmDZQ5upsynf-TtnLCPdHjYVFZYIYhKHeGEnEWuIL1YBfc8bS04pr3zLXSOGTzc_hNS1n1ji3sbKQ07mS7joBlZLblwr9MZ9xDbzFytJnAQRtWbnBetyuEnoPVzBOM9peHspKkIPWZaHZoFRB7jmaybVc8zIURZRtiUh1cRq2dd8PQ5hGLUrzOqgXlDFn3S24IfeIUSJn3o"
                  }
                ]
                  .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((p, idx) => (
                    <div key={idx} className="flex gap-4 items-center bg-white/70 dark:bg-stone-900/70 p-4 rounded-xl border border-stone-200/60 dark:border-stone-800 hover:bg-white/90 dark:hover:bg-stone-900/90 transition-colors">
                      <div className="w-14 aspect-[3/4] bg-stone-100 dark:bg-stone-800 overflow-hidden rounded-md flex-shrink-0">
                        <img className="w-full h-full object-cover" src={p.img} alt={p.name} />
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className="font-semibold text-stone-900 dark:text-stone-100 text-sm">{p.name}</h4>
                        <p className="text-[10px] text-stone-400 mt-0.5">{p.color}</p>
                        <p className="font-medium text-stone-900 dark:text-stone-100 mt-1 text-xs">{p.price}</p>
                      </div>
                      <button
                        onClick={() => {
                          const newItem = {
                            id: Date.now() + idx,
                            name: p.name,
                            variant: p.name === "Luxury Oversized Hoodie" ? `${selectedColor} / ${selectedSize}` : "M",
                            price: p.price,
                            qty: 1,
                            img: p.img
                          };
                          setCartItems(prev => {
                            const existing = prev.find(item => item.name === newItem.name && item.variant === newItem.variant);
                            if (existing) {
                              return prev.map(item => item.id === existing.id ? { ...item, qty: item.qty + 1 } : item);
                            }
                            return [...prev, newItem];
                          });
                          setSearchQuery("");
                          setSearchOpen(false);
                          setBagOpen(true);
                        }}
                        className="bg-stone-900 text-white px-4 py-2 text-[10px] tracking-[0.15em] uppercase font-semibold hover:bg-stone-700 transition-colors rounded-full"
                      >
                        Add to Bag
                      </button>
                    </div>
                  ))}
                {
                  [
                    { name: "Luxury Oversized Hoodie" },
                    { name: "Monolith Cargo Trouser" },
                    { name: "Architectural Mockneck" },
                    { name: "Modular Wool Trench" }
                  ].filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                    <p className="text-center text-sm text-stone-400 py-8">No items match your search query.</p>
                  )
                }
              </div>
            )}

            {/* Lookbook Cards when search query is empty */}
            {searchQuery.trim() === "" && (
              <div className="mt-20 grid grid-cols-2 gap-6 mb-16">
                <div 
                  onClick={() => {
                    setSearchOpen(false);
                    const element = document.querySelector('.purchase-card');
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }} 
                  className="relative aspect-[3/4] overflow-hidden rounded-lg group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-CFV3WFomdfvuuQQO9ZrOVsO5BLo20AodD5_p_mYqNPaP8oEYLJQXyUBIAQ8tO_ItvrVm-1CM65FosTzLYm8kipSaJgG5a66Yq0S0iyX4AEg0BQdPHE-t0-6-s1zye14xcNvWFjfhm3a1Lv6Qe2l_z0HGUcW7fDAYbamj8jSLVQ4MbC6NcaGMqHjccIF0h825RbI9TTW_xuR7IEWZOaZbfCBFsfKPAKEvMFQKS3oN8bfdB_mvCorn5RMf4zeuIVL8hrEezii4lVI"
                    alt="The Archival Hoodie"
                  />
                  <div className="absolute bottom-5 left-5 text-white z-20">
                    <p className="text-[10px] tracking-[0.15em] uppercase opacity-80 mb-1">Collection 01</p>
                    <h3 className="text-xl font-semibold" style={{ fontFamily: "var(--font-cormorant), serif" }}>The Archival Hoodie</h3>
                  </div>
                </div>
                <div 
                  onClick={() => {
                    setSearchOpen(false);
                    const element = document.querySelector('.purchase-card');
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }} 
                  className="relative aspect-[3/4] overflow-hidden rounded-lg group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8p4alS-V7pjyeK3uYbxQzdCKMyLEIiRQA6FRjFc6L0zD0Z7ed-RG-Qhk7iHWheilF6lYYIb4r8lFGa8usDA7vfUm4E3uqsA03hwUzWgqe5pvHkqkQImdvfxL4qu66Te64SLRUOVvAqnmZpNEfOP0uFeTNsJrm3-FtBvHqrSFIKESzjulaCMzSUftQaH37vkKytodvUZZhS1G5_BDICfFyJ567jBVmNCr5TLWi9nCcCUc_UBfUZljwLRpMgYEoxBb45bzkqR9-jIY"
                    alt="Modular Outerwear"
                  />
                  <div className="absolute bottom-5 left-5 text-white z-20">
                    <p className="text-[10px] tracking-[0.15em] uppercase opacity-80 mb-1">New Arrival</p>
                    <h3 className="text-xl font-semibold" style={{ fontFamily: "var(--font-cormorant), serif" }}>Modular Outerwear</h3>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── SHOPPING BAG SIDEBAR ── */}
        {/* Backdrop */}
        <div
          onClick={() => setBagOpen(false)}
          className={`fixed inset-0 z-[70] transition-all duration-500 ${
            bagOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          style={{ background: "rgba(23,24,24,0.25)", backdropFilter: "blur(4px)" }}
        />
        {/* Sidebar Drawer */}
        <aside
          className={`fixed top-0 right-0 h-full w-full md:w-[480px] z-[75] flex flex-col bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            bagOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Shopping Bag"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-stone-200 flex-shrink-0">
            <div className="flex items-center gap-3">
              {checkoutStep !== "cart" && checkoutStep !== "success" && (
                <button
                  onClick={() => setCheckoutStep(checkoutStep === "checkout" ? "shipping" : "cart")}
                  className="text-stone-400 hover:text-stone-900 transition-colors"
                  aria-label="Go back"
                >
                  <span className="material-symbols-outlined text-[22px]">arrow_back</span>
                </button>
              )}
              <h2 className="text-[22px] font-semibold text-stone-900" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                {checkoutStep === "cart" && `Your Bag (${cartCount})`}
                {checkoutStep === "shipping" && "Shipping Details"}
                {checkoutStep === "checkout" && "Payment"}
                {checkoutStep === "processing" && "Processing..."}
                {checkoutStep === "success" && "Order Confirmed"}
              </h2>
            </div>
            <button
              onClick={() => { setBagOpen(false); setCheckoutStep("cart"); }}
              className="hover:rotate-90 transition-transform duration-300"
              aria-label="Close bag"
            >
              <span className="material-symbols-outlined text-[26px] text-stone-700">close</span>
            </button>
          </div>
          {/* Step progress bar */}
          {(checkoutStep === "shipping" || checkoutStep === "checkout") && (
            <div className="px-8 pt-4 flex-shrink-0">
              <div className="flex items-center gap-2 mb-3">
                {["Bag", "Shipping", "Payment"].map((step, i) => {
                  const steps = ["cart", "shipping", "checkout"];
                  const currentIdx = steps.indexOf(checkoutStep);
                  const isActive = i <= currentIdx;
                  return (
                    <div key={step} className="flex items-center gap-2 flex-1">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0 transition-colors duration-300 ${isActive ? "bg-stone-900 text-white" : "bg-stone-200 text-stone-400"}`}>
                        {i + 1}
                      </div>
                      <span className={`text-[10px] tracking-[0.12em] uppercase font-semibold transition-colors duration-300 ${isActive ? "text-stone-900" : "text-stone-400"}`}>{step}</span>
                      {i < 2 && <div className={`h-[1px] flex-1 transition-colors duration-300 ${i < currentIdx ? "bg-stone-900" : "bg-stone-200"}`} />}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── CART VIEW ── */}
          {checkoutStep === "cart" && (
            <>
              <div className="flex-1 overflow-y-auto px-8 py-8 space-y-8">
                {cartItems.length === 0 ? (
                  <div className="text-center py-20">
                    <span className="material-symbols-outlined text-5xl text-stone-300 mb-4 block">shopping_bag</span>
                    <p className="text-sm text-stone-400 tracking-wide uppercase font-semibold">Your bag is empty</p>
                    <p className="text-xs text-stone-300 mt-2">Add something extraordinary.</p>
                    <button
                      onClick={() => { setBagOpen(false); const el = document.querySelector(".purchase-card"); if(el) el.scrollIntoView({behavior:"smooth"}); }}
                      className="mt-6 bg-stone-900 text-white px-8 py-3 text-[11px] tracking-[0.15em] uppercase font-semibold rounded-full hover:bg-stone-700 transition-colors"
                    >
                      Shop Now
                    </button>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex gap-5">
                      <div className="w-28 aspect-[3/4] bg-stone-100 overflow-hidden rounded-md flex-shrink-0">
                        <img className="w-full h-full object-cover" src={item.img} alt={item.name} />
                      </div>
                      <div className="flex flex-col justify-between flex-1 py-1">
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h3 className="text-[15px] font-semibold text-stone-900 leading-tight">{item.name}</h3>
                            <p className="text-[15px] font-semibold text-stone-900 whitespace-nowrap">{item.price}</p>
                          </div>
                          <p className="text-[11px] tracking-[0.1em] uppercase text-stone-400 mt-1">{item.variant}</p>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-stone-200 rounded-full overflow-hidden">
                            <button
                              onClick={() => handleUpdateQty(item.id, item.qty - 1)}
                              className="px-3 py-1.5 hover:bg-stone-100 transition-colors text-stone-600"
                            >
                              <span className="material-symbols-outlined text-[15px]">remove</span>
                            </button>
                            <span className="px-3 text-[12px] font-semibold tracking-wider">{item.qty}</span>
                            <button
                              onClick={() => handleUpdateQty(item.id, item.qty + 1)}
                              className="px-3 py-1.5 hover:bg-stone-100 transition-colors text-stone-600"
                            >
                              <span className="material-symbols-outlined text-[15px]">add</span>
                            </button>
                          </div>
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-[11px] tracking-[0.1em] uppercase text-stone-400 underline underline-offset-4 hover:text-stone-900 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}

                {cartItems.length > 0 && (
                  <div className="p-5 bg-stone-50 rounded-xl border border-stone-100">
                    <p className="text-[10px] tracking-[0.18em] uppercase text-stone-400 font-semibold mb-3">Complete the Look</p>
                    <div
                      onClick={() => {
                        const upsell = { id: Date.now(), name: "Monolith Cargo Trouser", variant: "M", price: "$180.00", qty: 1, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8dXrMRClNy28Q9nCMLCyQcPUSyugxNwXjytVTihx-I7F9gOZ_mV1TSszjBgNG4pWFCCDkATCVaSaerBMmBN_T61Kr2yyCSXHRr-DI9zPVcs8bbdSMZwuuYXVBJhQ-WaU6MlebhOByFZ2Dd1EhovCwANplaaSy4e2Iq928DCvoQNmexsqLJUBcWOw4UZzz-6VL1ixumvGsTkE7MbCL1jyEJ7fLxwC7GkDxxkWmQfcVMxUYINDZ8BsCW2oXtiDtCM9DZgg1bx3ok1U" };
                        setCartItems(prev => { const ex = prev.find(i=>i.name===upsell.name&&i.variant===upsell.variant); return ex ? prev.map(i=>i.id===ex.id?{...i,qty:i.qty+1}:i) : [...prev,upsell]; });
                      }}
                      className="flex gap-4 items-center group cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-lg bg-stone-200 overflow-hidden flex-shrink-0">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8dXrMRClNy28Q9nCMLCyQcPUSyugxNwXjytVTihx-I7F9gOZ_mV1TSszjBgNG4pWFCCDkATCVaSaerBMmBN_T61Kr2yyCSXHRr-DI9zPVcs8bbdSMZwuuYXVBJhQ-WaU6MlebhOByFZ2Dd1EhovCwANplaaSy4e2Iq928DCvoQNmexsqLJUBcWOw4UZzz-6VL1ixumvGsTkE7MbCL1jyEJ7fLxwC7GkDxxkWmQfcVMxUYINDZ8BsCW2oXtiDtCM9DZgg1bx3ok1U" alt="Cargo Trouser" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[14px] text-stone-800 font-medium">Monolith Cargo Trouser</p>
                        <p className="text-[11px] tracking-[0.1em] uppercase text-stone-400 mt-0.5">$180.00</p>
                      </div>
                      <span className="text-[10px] tracking-widest uppercase font-semibold text-stone-500 group-hover:text-stone-900 transition-colors">+ Add</span>
                    </div>
                  </div>
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="px-8 py-6 border-t border-stone-100 bg-white flex-shrink-0">
                  <div className="space-y-2 mb-5">
                    <div className="flex justify-between text-[11px] tracking-[0.1em] uppercase text-stone-400">
                      <span>Subtotal</span>
                      <span>${cartItems.reduce((acc, i) => acc + parseFloat(i.price.replace("$", "")) * i.qty, 0).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-[11px] tracking-[0.1em] uppercase text-stone-400">
                      <span>Shipping</span>
                      <span className="text-stone-700">Free</span>
                    </div>
                    <div className="flex justify-between pt-3 border-t border-stone-100">
                      <span className="text-[15px] font-bold text-stone-900">Total</span>
                      <span className="text-[15px] font-bold text-stone-900">${cartItems.reduce((acc, i) => acc + parseFloat(i.price.replace("$", "")) * i.qty, 0).toFixed(2)}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setCheckoutStep("shipping")}
                    className="w-full bg-stone-900 text-white py-4 text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-stone-700 transition-colors rounded-full"
                  >
                    Proceed to Checkout
                  </button>
                  <p className="text-center text-[10px] text-stone-400 mt-4">Taxes calculated at next step. Carbon neutral shipping.</p>
                </div>
              )}
            </>
          )}

          {/* ── SHIPPING VIEW ── */}
          {checkoutStep === "shipping" && (
            <form onSubmit={handleShippingSubmit} className="flex flex-col flex-1 overflow-hidden">
              <div className="flex-1 overflow-y-auto px-8 py-8 space-y-5">
                <p className="text-[11px] tracking-[0.2em] uppercase text-stone-400 font-semibold mb-2">Contact & Delivery</p>
                {[
                  { label: "Full Name", name: "name", type: "text", placeholder: "Alex Chen", value: shippingInfo.name },
                  { label: "Email Address", name: "email", type: "email", placeholder: "alex@example.com", value: shippingInfo.email },
                  { label: "Street Address", name: "address", type: "text", placeholder: "12 Architect Lane", value: shippingInfo.address },
                  { label: "City", name: "city", type: "text", placeholder: "London", value: shippingInfo.city },
                  { label: "Postcode / ZIP", name: "zip", type: "text", placeholder: "EC1A 1BB", value: shippingInfo.zip },
                ].map(field => (
                  <div key={field.name} className="space-y-1">
                    <label className="text-[10px] tracking-[0.15em] uppercase text-stone-500 font-semibold block">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={field.value}
                      onChange={handleShippingChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-900 placeholder-stone-300 focus:outline-none focus:border-stone-900 transition-colors"
                    />
                  </div>
                ))}
                <div className="mt-4 p-4 bg-stone-50 rounded-xl border border-stone-100 flex items-center gap-3">
                  <span className="material-symbols-outlined text-stone-400 text-lg">local_shipping</span>
                  <div>
                    <p className="text-[12px] font-semibold text-stone-900">Complimentary Worldwide Shipping</p>
                    <p className="text-[10px] text-stone-400 mt-0.5">Arrives in 3–5 business days, carbon neutral.</p>
                  </div>
                </div>
              </div>
              <div className="px-8 py-6 border-t border-stone-100 bg-white flex-shrink-0">
                <div className="flex justify-between text-[13px] font-medium text-stone-900 mb-4">
                  <span>Order Total</span>
                  <span>${cartItems.reduce((acc, i) => acc + parseFloat(i.price.replace("$", "")) * i.qty, 0).toFixed(2)}</span>
                </div>
                <button type="submit" className="w-full bg-stone-900 text-white py-4 text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-stone-700 transition-colors rounded-full">
                  Continue to Payment
                </button>
              </div>
            </form>
          )}

          {/* ── PAYMENT VIEW ── */}
          {checkoutStep === "checkout" && (
            <form onSubmit={handlePaymentSubmit} className="flex flex-col flex-1 overflow-hidden">
              <div className="flex-1 overflow-y-auto px-8 py-8 space-y-5">
                <p className="text-[11px] tracking-[0.2em] uppercase text-stone-400 font-semibold mb-2">Card Details</p>
                <div className="space-y-1">
                  <label className="text-[10px] tracking-[0.15em] uppercase text-stone-500 font-semibold block">Card Number</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="cardNumber"
                      value={paymentInfo.cardNumber}
                      onChange={handlePaymentChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      required
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 pr-12 text-sm text-stone-900 placeholder-stone-300 focus:outline-none focus:border-stone-900 transition-colors font-mono"
                    />
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-stone-300 text-lg">credit_card</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] tracking-[0.15em] uppercase text-stone-500 font-semibold block">Expiry Date</label>
                    <input
                      type="text"
                      name="expiry"
                      value={paymentInfo.expiry}
                      onChange={handlePaymentChange}
                      placeholder="MM/YY"
                      maxLength={5}
                      required
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-900 placeholder-stone-300 focus:outline-none focus:border-stone-900 transition-colors font-mono"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] tracking-[0.15em] uppercase text-stone-500 font-semibold block">CVC</label>
                    <input
                      type="text"
                      name="cvc"
                      value={paymentInfo.cvc}
                      onChange={handlePaymentChange}
                      placeholder="123"
                      maxLength={3}
                      required
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-900 placeholder-stone-300 focus:outline-none focus:border-stone-900 transition-colors font-mono"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="material-symbols-outlined text-stone-400 text-base">lock</span>
                  <p className="text-[10px] text-stone-400">256-bit SSL encryption. Your card data is never stored.</p>
                </div>
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-100 mt-4">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-stone-400 font-semibold mb-3">Order Summary</p>
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between text-[12px] text-stone-700 mb-1">
                      <span>{item.name} × {item.qty}</span>
                      <span>${(parseFloat(item.price.replace("$", "")) * item.qty).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t border-stone-200 mt-2 pt-2 flex justify-between text-[13px] font-bold text-stone-900">
                    <span>Total</span>
                    <span>${cartItems.reduce((acc, i) => acc + parseFloat(i.price.replace("$", "")) * i.qty, 0).toFixed(2)}</span>
                  </div>
                  <p className="text-[10px] text-stone-400 mt-1">Ships to: {shippingInfo.city}, {shippingInfo.zip}</p>
                </div>
              </div>
              <div className="px-8 py-6 border-t border-stone-100 bg-white flex-shrink-0">
                <button type="submit" className="w-full bg-stone-900 text-white py-4 text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-stone-700 transition-colors rounded-full flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">lock</span>
                  Pay ${cartItems.reduce((acc, i) => acc + parseFloat(i.price.replace("$", "")) * i.qty, 0).toFixed(2)}
                </button>
                <p className="text-center text-[10px] text-stone-400 mt-4">30-day returns · Carbon neutral shipping</p>
              </div>
            </form>
          )}

          {/* ── PROCESSING VIEW ── */}
          {checkoutStep === "processing" && (
            <div className="flex-1 flex flex-col items-center justify-center px-8 py-20 gap-6">
              <div className="w-16 h-16 rounded-full border-4 border-stone-200 border-t-stone-900 animate-spin" />
              <p className="text-sm text-stone-500 tracking-wide uppercase font-semibold">Processing your order…</p>
              <p className="text-[11px] text-stone-400 text-center">Please wait. Do not close this window.</p>
            </div>
          )}

          {/* ── SUCCESS VIEW ── */}
          {checkoutStep === "success" && (
            <div className="flex-1 flex flex-col items-center justify-center px-8 py-12 gap-6 text-center">
              <div className="w-20 h-20 rounded-full bg-stone-900 flex items-center justify-center mb-2 shadow-lg">
                <span className="material-symbols-outlined text-white text-[40px]">check</span>
              </div>
              <h3 className="text-2xl font-display font-semibold text-stone-900" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                Order Confirmed
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed max-w-xs">
                Thank you for your order. A confirmation has been sent to <strong>{shippingInfo.email}</strong>.
              </p>
              <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 w-full max-w-xs">
                <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400 font-semibold mb-2">Order Reference</p>
                <p className="text-xl font-mono font-bold text-stone-900">{orderId}</p>
                <div className="mt-3 pt-3 border-t border-stone-200">
                  <p className="text-[11px] text-stone-400">Ships to: {shippingInfo.city}, {shippingInfo.zip}</p>
                  <p className="text-[11px] text-stone-400 mt-0.5">Estimated arrival: 3–5 business days</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setCartItems([]);
                  setCheckoutStep("cart");
                  setShippingInfo({ name: "", email: "", address: "", city: "", zip: "" });
                  setPaymentInfo({ cardNumber: "", expiry: "", cvc: "" });
                  setOrderId("");
                  setBagOpen(false);
                }}
                className="mt-2 w-full max-w-xs bg-stone-900 text-white py-4 text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-stone-700 transition-colors rounded-full"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </aside>

      </div>
    </ReactLenis>
  );
}
