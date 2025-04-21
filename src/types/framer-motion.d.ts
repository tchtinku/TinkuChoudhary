declare module 'framer-motion' {
  import * as React from 'react';

  export interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    variants?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    viewport?: any;
    drag?: any;
    dragConstraints?: any;
    dragElastic?: any;
    dragMomentum?: any;
    onDragStart?: any;
    onDragEnd?: any;
    onHoverStart?: any;
    onHoverEnd?: any;
    onTap?: any;
    onTapStart?: any;
    onTapCancel?: any;
    onAnimationStart?: any;
    onAnimationComplete?: any;
    onUpdate?: any;
    onViewportEnter?: any;
    onViewportLeave?: any;
    layout?: any;
    layoutId?: any;
    layoutDependency?: any;
    layoutScroll?: any;
    layoutPosition?: any;
    layoutSize?: any;
    layoutOrigin?: any;
    layoutTransition?: any;
    custom?: any;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

  export interface MotionComponent extends React.ForwardRefExoticComponent<MotionProps> {
    displayName?: string;
  }

  export const motion: {
    div: MotionComponent;
    span: MotionComponent;
    p: MotionComponent;
    h1: MotionComponent;
    h2: MotionComponent;
    h3: MotionComponent;
    h4: MotionComponent;
    h5: MotionComponent;
    h6: MotionComponent;
    a: MotionComponent;
    button: MotionComponent;
    img: MotionComponent;
    svg: MotionComponent;
    path: MotionComponent;
    rect: MotionComponent;
    circle: MotionComponent;
    [key: string]: MotionComponent;
  };

  export const AnimatePresence: React.FC<{
    children?: React.ReactNode;
    mode?: 'sync' | 'wait' | 'popLayout';
    initial?: boolean;
    onExitComplete?: () => void;
    exitBeforeEnter?: boolean;
    presenceAffectsLayout?: boolean;
  }>;

  export function useAnimation(): {
    start: (definition: any) => Promise<any>;
    set: (definition: any) => void;
    stop: () => void;
    isActive: () => boolean;
    getVariants: () => any;
  };

  export function useInView(options?: {
    root?: Element | null;
    rootMargin?: string;
    amount?: number | 'some' | 'all';
    once?: boolean;
    fallbackInView?: boolean;
  }): [React.RefObject<any>, boolean];

  export function useScroll(options?: {
    container?: React.RefObject<Element>;
    target?: React.RefObject<Element>;
    offset?: [number, number];
    smooth?: number;
    layoutEffect?: boolean;
  }): {
    scrollX: any;
    scrollY: any;
    scrollXProgress: any;
    scrollYProgress: any;
  };

  export function useTransform<T>(
    input: any,
    inputRange: number[],
    outputRange: T[],
    options?: { clamp?: boolean }
  ): T;

  export function useSpring<T>(
    initialValue: T,
    config?: {
      stiffness?: number;
      damping?: number;
      mass?: number;
      velocity?: number;
      restSpeed?: number;
      restDelta?: number;
    }
  ): T;

  export function useMotionValue<T>(initial: T): {
    get: () => T;
    set: (value: T) => void;
    stop: () => void;
    isActive: () => boolean;
  };

  export function useMotionTemplate(
    template: string,
    ...values: any[]
  ): string;

  export function useReducedMotion(): boolean;

  export function useElementSize(): [
    React.RefObject<Element>,
    { width: number; height: number }
  ];

  export function useDragControls(): {
    start: (event: MouseEvent | TouchEvent | PointerEvent) => void;
    stop: () => void;
    isDragging: () => boolean;
  };

  export function usePresence(): [boolean, () => void];

  export function useAnimate(): {
    animate: (definition: any) => Promise<any>;
    set: (definition: any) => void;
    stop: () => void;
    isActive: () => boolean;
  };

  export function useAnimateControls(): {
    start: (definition: any) => Promise<any>;
    set: (definition: any) => void;
    stop: () => void;
    isActive: () => boolean;
  };

  export function useAnimatePresence(): [boolean, () => void];

  export function useAnimateScroll(): {
    scrollX: any;
    scrollY: any;
    scrollXProgress: any;
    scrollYProgress: any;
  };

  export function useAnimateTransform<T>(
    input: any,
    inputRange: number[],
    outputRange: T[],
    options?: { clamp?: boolean }
  ): T;

  export function useAnimateSpring<T>(
    initialValue: T,
    config?: {
      stiffness?: number;
      damping?: number;
      mass?: number;
      velocity?: number;
      restSpeed?: number;
      restDelta?: number;
    }
  ): T;

  export function useAnimateMotionValue<T>(initial: T): {
    get: () => T;
    set: (value: T) => void;
    stop: () => void;
    isActive: () => boolean;
  };

  export function useAnimateMotionTemplate(
    template: string,
    ...values: any[]
  ): string;

  export function useAnimateReducedMotion(): boolean;

  export function useAnimateElementSize(): [
    React.RefObject<Element>,
    { width: number; height: number }
  ];

  export function useAnimateDragControls(): {
    start: (event: MouseEvent | TouchEvent | PointerEvent) => void;
    stop: () => void;
    isDragging: () => boolean;
  };

  export function useAnimatePresence(): [boolean, () => void];
} 