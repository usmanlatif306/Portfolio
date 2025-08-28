import { FunctionComponent } from "react";
import { IconType } from "react-icons";
export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export interface Title {
  title: any;
}

export interface Skill {
  Icon: IconType;
  name: string;
  level: string;
}

export interface IProject {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category =
  | "laravel"
  | "php"
  | "livewire"
  | "Livewire"
  | "react"
  | "next"
  | "vue"
  | "node"
  | "express"
  | "mongo"
  | "tailwind"
  | "bootstrap"
  | "redux"
  | "stripe"
  | "mysql";
