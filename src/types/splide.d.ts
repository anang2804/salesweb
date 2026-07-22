declare module "@splidejs/react-splide" {
  import { ComponentConstructor, Options } from "@splidejs/splide";
  import React from "react";

  interface SplideProps {
    options?: Options;
    hasTrack?: boolean;
    tag?: "div" | "section" | "header" | "footer" | "nav";
    extensions?: Record<string, ComponentConstructor>;
    transition?: ComponentConstructor;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    "aria-label"?: string;
  }

  export class Splide extends React.Component<SplideProps> {
    splide: import("@splidejs/splide").default | undefined;
    go(control: number | string): void;
    sync(splide: import("@splidejs/splide").default): void;
  }

  export class SplideSlide extends React.Component<{
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
  }> {}

  export class SplideTrack extends React.Component<{
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
  }> {}
}
