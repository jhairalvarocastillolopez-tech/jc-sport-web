"use client";

import { useState } from "react";

type Producto = {
  nombre: string;
  categoria: string;
  precio: string;
  otrasTiendas?: string;
  stock: string;
  imagen: string;
  mensaje: string;
  tallas: string;
  marca: "Nike" | "adidas";
};

type ImagenModal =
  | {
      tipo: "producto";
      src: string;
      nombre: string;
      producto: Producto;
    }
  | {
      tipo: "simple";
      src: string;
      nombre: string;
    };

const todosLosProductos: Producto[] = [
  {
    nombre: "Nike Air Force 1 07",
    categoria: "Hombre",
    precio: "S/349.00",
    otrasTiendas: "S/549.00",
    stock: "Disponible",
    imagen: "/images/air-force-1-07-hombre.jpg",
    mensaje:
      "Hola, quiero consultar stock del Nike Air Force 1 07 para hombre, precio S/349.00, tallas 40, 40.5, 41, 42, 42.5, 43 y 44",
    tallas: "40 • 40.5 • 41 • 42 • 42.5 • 43 • 44",
    marca: "Nike",
  },
  {
    nombre: "Nike Air Force 1 07",
    categoria: "Hombre",
    precio: "S/369.00",
    otrasTiendas: "S/549.00",
    stock: "Disponible",
    imagen: "/images/air-force-1-07-hombre-crema.jpg",
    mensaje:
      "Hola, quiero consultar stock del Nike Air Force 1 07 para hombre color crema, precio S/369.00, tallas 40.5 y 41",
    tallas: "40.5 • 41",
    marca: "Nike",
  },
  {
    nombre: "Nike Interact Run EasyOn",
    categoria: "Hombre",
    precio: "S/299.00",
    otrasTiendas: "S/399.00",
    stock: "Disponible",
    imagen: "/images/nike-interact-run-easyon-hombre.jpg",
    mensaje:
      "Hola, quiero consultar stock del Nike Interact Run EasyOn para hombre, precio S/299.00, tallas 42, 43 y 44",
    tallas: "42 • 43 • 44",
    marca: "Nike",
  },
  {
    nombre: "Jordan Flight Court",
    categoria: "Hombre",
    precio: "S/349.00",
    otrasTiendas: "S/469.00",
    stock: "Disponible",
    imagen: "/images/jordan-flight-court-hombre.jpg",
    mensaje:
      "Hola, quiero consultar stock del Jordan Flight Court para hombre, precio S/349.00, tallas 40, 41, 42, 42.5, 43 y 44",
    tallas: "40 • 41 • 42 • 42.5 • 43 • 44",
    marca: "Nike",
  },
  {
    nombre: "Nike Downshift",
    categoria: "Hombre",
    precio: "S/199.00",
    otrasTiendas: "S/229.00",
    stock: "Disponible",
    imagen: "/images/nike-downshift-court-hombre.jpg",
    mensaje:
      "Hola, quiero consultar stock del Nike Downshift Court para hombre, precio S/199.00, tallas 40, 42, 42.5, 43 y 44",
    tallas: "40 • 42 • 42.5 • 43 • 44",
    marca: "Nike",
  },
  {
    nombre: "Nike Run Defy",
    categoria: "Hombre",
    precio: "S/169.00",
    otrasTiendas: "S/199.00",
    stock: "Disponible",
    imagen: "/images/nike-run-defy-hombre.jpg",
    mensaje:
      "Hola, quiero consultar stock del Nike Run Defy para hombre, precio S/169.00, tallas 40, 42, 42.5, 43 y 44",
    tallas: "40 • 42 • 42.5 • 43 • 44",
    marca: "Nike",
  },
  {
    nombre: "Nike Mercurial Superfly 10 Club",
    categoria: "Hombre",
    precio: "S/200.00",
    otrasTiendas: "S/339.00",
    stock: "Disponible",
    imagen: "/images/nike-mercurial-superfly-10-club-hombre.jpg",
    mensaje:
      "Hola, quiero consultar stock del Nike Mercurial Superfly 10 Club para hombre, precio S/200.00, tallas 42.5, 43, 44 y 45",
    tallas: "42.5 • 43 • 44 • 45",
    marca: "Nike",
  },
  {
    nombre: "Grand Court Alpha 00s",
    categoria: "Hombre",
    precio: "S/249.00",
    otrasTiendas: "S/279.00",
    stock: "Disponible",
    imagen: "/images/grand-court-alpha-00s-hombre.jpg",
    mensaje:
      "Hola, quiero consultar stock del Grand Court Alpha 00s para hombre, precio S/249.00, tallas 40, 40.5, 41, 42 y 43.5",
    tallas: "40 • 40.5 • 41 • 42 • 43.5",
    marca: "adidas",
  },
  {
    nombre: "Adidas Break Start",
    categoria: "Hombre",
    precio: "S/209.90",
    otrasTiendas: "S/229.00",
    stock: "Disponible",
    imagen: "/images/adidas-break-start-hombre.jpg",
    mensaje:
      "Hola, quiero consultar stock del Adidas Break Start para hombre, precio S/209.90, tallas 40, 40.5, 41, 42 y 43.5",
    tallas: "40 • 40.5 • 41 • 42 • 43.5",
    marca: "adidas",
  },
  {
    nombre: "Adidas Streettalk",
    categoria: "Hombre",
    precio: "S/179.90",
    otrasTiendas: "S/209.00",
    stock: "Disponible",
    imagen: "/images/adidas-streettalk-hombre.jpg",
    mensaje:
      "Hola, quiero consultar stock del Adidas Streettalk para hombre, precio S/179.90, tallas 40, 40.5, 41, 42, 42.5, 43.5",
    tallas: "40 • 40.5 • 41 • 42 • 42.5 • 43.5",
    marca: "adidas",
  },
  {
    nombre: "Adidas Breaknet 3.0",
    categoria: "Hombre",
    precio: "S/209.90",
    otrasTiendas: "S/229.00",
    stock: "Disponible",
    imagen: "/images/adidas-breaknet-3-0-hombre.jpg",
    mensaje:
      "Hola, quiero consultar stock del Adidas Breaknet 3.0 para hombre, precio S/209.90, tallas 40, 42.5, 43.5 y 44",
    tallas: "40 • 42.5 • 43.5 • 44",
    marca: "adidas",
  },
  {
    nombre: "Adidas Barreda",
    categoria: "Hombre",
    precio: "S/229.00",
    otrasTiendas: "S/249.00",
    stock: "Disponible",
    imagen: "/images/adidas-barreda-hombre.jpg",
    mensaje:
      "Hola, quiero consultar stock del Adidas Barreda para hombre, precio S/229.00, tallas 40, 40.5, 41, 42, 42.5 y 43.5",
    tallas: "40 • 40.5 • 41 • 42 • 42.5 • 43.5",
    marca: "adidas",
  },
  {
    nombre: "Adidas Break Start",
    categoria: "Hombre",
    precio: "S/219.00",
    otrasTiendas: "S/249.00",
    stock: "Disponible",
    imagen: "/images/adidas-break-start-hombre-2.jpg",
    mensaje:
      "Hola, quiero consultar stock del Adidas Break Start para hombre, precio S/219.00, tallas 40, 40.5, 41, 42, 42.5 y 43.5",
    tallas: "40 • 40.5 • 41 • 42 • 42.5 • 43.5",
    marca: "adidas",
  },
  {
    nombre: "Adidas Goleto IX TF",
    categoria: "Hombre",
    precio: "S/155.00",
    otrasTiendas: "S/169.00",
    stock: "Disponible",
    imagen: "/images/adidas-goleto-ix-tf-hombre.jpg",
    mensaje:
      "Hola, quiero consultar stock del Adidas Goleto IX TF para hombre, precio S/155.00, tallas 40, 40.5, 41, 42, 42.5, 43.5, 44, 44.5, 45.5, 46 y 46.5",
    tallas:
      "40 • 40.5 • 41 • 42 • 42.5 • 43.5 • 44 • 44.5 • 45.5 • 46 • 46.5",
    marca: "adidas",
  },
  {
    nombre: "Adidas F50 Club IN",
    categoria: "Hombre",
    precio: "S/229.00",
    otrasTiendas: "S/259.00",
    stock: "Disponible",
    imagen: "/images/adidas-f50-club-in-hombre.jpg",
    mensaje:
      "Hola, quiero consultar stock del Adidas F50 Club IN para hombre, precio S/229.00, tallas 40, 40.5, 41, 42, 42.5 y 43.5",
    tallas: "40 • 40.5 • 41 • 42 • 42.5 • 43.5",
    marca: "adidas",
  },
  {
    nombre: "Nike Air Force 1 Mid 07 LE 7",
    categoria: "Hombre",
    precio: "S/449.00",
    otrasTiendas: "S/629.00",
    stock: "Disponible",
    imagen: "/images/nike-air-force-1-mid-07-le-7-hombre.jpg",
    mensaje:
      "Hola, quiero consultar stock del Nike Air Force 1 Mid 07 LE 7 para hombre, precio S/449.00, tallas 42, 42.5, 43, 44, 44.5 y 46",
    tallas: "42 • 42.5 • 43 • 44 • 44.5 • 46",
    marca: "Nike",
  },
  {
    nombre: "Nike Air Huarache",
    categoria: "Hombre",
    precio: "S/439.00",
    otrasTiendas: "S/649.00",
    stock: "Disponible",
    imagen: "/images/nike-air-huarache-hombre.jpg",
    mensaje:
      "Hola, quiero consultar stock del Nike Air Huarache para hombre, precio S/439.00, tallas 42, 42.5, 43 y 44",
    tallas: "42 • 42.5 • 43 • 44",
    marca: "Nike",
  },
  {
    nombre: "Nike Air Zoom Pegas",
    categoria: "Hombre",
    precio: "S/369.00",
    otrasTiendas: "S/619.00",
    stock: "Disponible",
    imagen: "/images/nike-air-zoom-pegasus-hombre.jpg",
    mensaje:
      "Hola, quiero consultar stock del Nike Air Zoom Pegasus para hombre, precio S/369.00, tallas 40, 40.5, 41, 42, 42.5, 43, 44 y 44.5",
    tallas: "40 • 40.5 • 41 • 42 • 42.5 • 43 • 44 • 44.5",
    marca: "Nike",
  },
  {
    nombre: "Grand Court TD Lifestyle Court Casual",
    categoria: "Hombre",
    precio: "S/149.00",
    otrasTiendas: "S/179.00",
    stock: "Disponible",
    imagen: "/images/grand-court-td-lifestyle-court-casual-hombre.jpg",
    mensaje:
      "Hola, quiero consultar stock del Grand Court TD Lifestyle Court Casual para hombre, precio S/149.00, tallas 40.5, 41, 42.5, 43.5 y 44.5",
    tallas: "40.5 • 41 • 42.5 • 43.5 • 44.5",
    marca: "adidas",
  },
  {
    nombre: "Adidas VS Pace 2.0",
    categoria: "Hombre",
    precio: "S/149.00",
    otrasTiendas: "S/229.00",
    stock: "Disponible",
    imagen: "/images/adidas-vs-pace-2-0-hombre.jpg",
    mensaje:
      "Hola, quiero consultar stock del Adidas VS Pace 2.0 para hombre, precio S/149.00, tallas 40.5, 41, 42, 42.5, 43.5, 44 y 44.5",
    tallas: "40.5 • 41 • 42 • 42.5 • 43.5 • 44 • 44.5",
    marca: "adidas",
  },
  {
    nombre: "Predator Essentials 25.5 TF",
    categoria: "Hombre",
    precio: "S/139.00",
    otrasTiendas: "S/159.00",
    stock: "Disponible",
    imagen: "/images/predator-essentials-25-5-tf-hombre.jpg",
    mensaje:
      "Hola, quiero consultar stock del Predator Essentials 25.5 TF para hombre, precio S/139.00, tallas 40, 40.5, 41, 42, 42.5, 43.5, 44 y 44.5",
    tallas: "40 • 40.5 • 41 • 42 • 42.5 • 43.5 • 44 • 44.5",
    marca: "adidas",
  },
  {
    nombre: "Predator League TF",
    categoria: "Hombre",
    precio: "S/199.00",
    otrasTiendas: "S/359.00",
    stock: "Disponible",
    imagen: "/images/predator-league-tf-hombre.jpg",
    mensaje:
      "Hola, quiero consultar stock del Predator League TF para hombre, precio S/199.00, tallas 41, 42, 42.5, 43.5, 44, 44.5, 45.5, 46 y 46.5",
    tallas: "41 • 42 • 42.5 • 43.5 • 44 • 44.5 • 45.5 • 46 • 46.5",
    marca: "adidas",
  },
  {
    nombre: "Adidas F50 Messi Club Moqueta",
    categoria: "Hombre",
    precio: "S/169.00",
    otrasTiendas: "S/249.00",
    stock: "Disponible",
    imagen: "/images/adidas-f50-messi-club-moqueta-hombre.jpg",
    mensaje:
      "Hola, quiero consultar stock del Adidas F50 Messi Club Moqueta para hombre, precio S/169.00, otras tiendas S/429.00, tallas 40, 41, 43.5, 44, 44.5 y 46",
    tallas: "40 • 41 • 43.5 • 44 • 44.5 • 46",
    marca: "adidas",
  },
  {
    nombre: "Adidas Defiant Speed 2 M",
    categoria: "Hombre",
    precio: "S/249.00",
    otrasTiendas: "S/429.00",
    stock: "Disponible",
    imagen: "/images/adidas-defiant-speed-2-m-hombre.jpg",
    mensaje:
      "Hola, quiero consultar stock del Adidas Defiant Speed 2 M para hombre, precio S/249.00, otras tiendas S/429.00, tallas 41, 42, 42.5, 43.5, 44 y 44.5",
    tallas: "41 • 42 • 42.5 • 43.5 • 44 • 44.5",
    marca: "adidas",
  },
];

const productosMujeres: Producto[] = [
  {
    nombre: "Nike Air Force 1",
    categoria: "Mujeres",
    precio: "S/399.00",
    otrasTiendas: "S/569.00",
    stock: "Disponible",
    imagen: "/images/air-force-1-mujeres.jpg",
    mensaje:
      "Hola, quiero consultar stock del Nike Air Force 1 para mujeres, precio S/349.00, tallas 37.5, 38, 38.5 y 39",
    tallas: "37.5 • 38 • 38.5 • 39",
    marca: "Nike",
  },
  {
    nombre: "Air Max 90 NN",
    categoria: "Mujer",
    precio: "S/449.00",
    otrasTiendas: "S/617.89",
    stock: "Disponible",
    imagen: "/images/air-max-90-nn-mujer.jpg",
    mensaje:
      "Hola, quiero consultar stock del Air Max 90 NN para mujer, precio S/449.00, tallas 36, 37.5, 38, 38.5, 39 y 40",
    tallas: "36 • 37.5 • 38 • 38.5 • 39 • 40",
    marca: "Nike",
  },
  {
    nombre: "Nike Dunk Low Next Nature",
    categoria: "Mujer",
    precio: "S/449.00",
    otrasTiendas: "S/569.00",
    stock: "Disponible",
    imagen: "/images/nike-dunk-low-next-nature-mujer.jpg",
    mensaje:
      "Hola, quiero consultar stock del Nike Dunk Low Next Nature para mujer, precio S/449.00, tallas 36.5, 37.5, 38, 38.5, 39 y 40",
    tallas: "36.5 • 37.5 • 38 • 38.5 • 39 • 40",
    marca: "Nike",
  },
  {
    nombre: "Air Force 1 107 REC 6",
    categoria: "Mujer",
    precio: "S/439.00",
    otrasTiendas: "S/549.00",
    stock: "Disponible",
    imagen: "/images/air-force-1-107-rec-6-mujer.jpg",
    mensaje:
      "Hola, quiero consultar stock del Air Force 1 107 REC 6 para mujer, precio S/449.00, tallas 36, 36.5, 37.5, 38, 38.5, 39 y 40",
    tallas: "36 • 36.5 • 37.5 • 38 • 38.5 • 39 • 40",
    marca: "Nike",
  },
  {
    nombre: "Adidas Advantage Base 2.0",
    categoria: "Mujer",
    precio: "S/174.90",
    otrasTiendas: "S/199.00",
    stock: "Disponible",
    imagen: "/images/adidas-advantage-base-2-0-mujer.jpg",
    mensaje:
      "Hola, quiero consultar stock del Adidas Advantage Base 2.0 para mujer, precio S/174.90, otras tiendas S/199.00, tallas 36.5, 37.5, 38, 38.5, 39.5, 40 y 40.5",
    tallas: "36.5 • 37.5 • 38 • 38.5 • 39.5 • 40 • 40.5",
    marca: "adidas",
  },
  {
    nombre: "Adidas Barreda",
    categoria: "Mujer",
    precio: "S/219.00",
    otrasTiendas: "S/249.00",
    stock: "Disponible",
    imagen: "/images/adidas-barreda-mujer.jpg",
    mensaje:
      "Hola, quiero consultar stock del Adidas Barreda para mujer, precio S/219.00, otras tiendas S/249.00, tallas 36, 36.5, 37.5, 38 y 38.5",
    tallas: "36 • 36.5 • 37.5 • 38 • 38.5",
    marca: "adidas",
  },
  {
    nombre: "Adidas Dropset Control Trainer",
    categoria: "Mujer",
    precio: "S/255.90",
    otrasTiendas: "S/299.00",
    stock: "Disponible",
    imagen: "/images/adidas-dropset-control-trainer-mujer.jpg",
    mensaje:
      "Hola, quiero consultar stock del Adidas Dropset Control Trainer para mujer, precio S/255.90, otras tiendas S/299.00, tallas 36, 36.5 y 37.5",
    tallas: "36 • 36.5 • 37.5",
    marca: "adidas",
  },
  {
    nombre: "Adidas Terrex Skychaser AX5 GTX W",
    categoria: "Mujer",
    precio: "S/389.00",
    otrasTiendas: "S/459.00",
    stock: "Disponible",
    imagen: "/images/adidas-terrex-skychaser-ax5-gtx-w-mujer.jpg",
    mensaje:
      "Hola, quiero consultar stock del Adidas Terrex Skychaser AX5 GTX W para mujer, precio S/389.00, otras tiendas S/459.00, tallas 36 y 36.5",
    tallas: "36 • 36.5",
    marca: "adidas",
  },
  {
    nombre: "Adidas Court 24",
    categoria: "Mujer",
    precio: "S/229.00",
    otrasTiendas: "S/299.00",
    stock: "Disponible",
    imagen: "/images/adidas-court-24-mujer.jpg",
    mensaje:
      "Hola, quiero consultar stock del Adidas Court 24 para mujer, precio S/229.00, otras tiendas S/299.00, tallas 36, 36.5, 37.5, 38 y 38.5",
    tallas: "36 • 36.5 • 37.5 • 38 • 38.5",
    marca: "adidas",
  },
  {
    nombre: "Adidas Terrex Tracefinder 2 W",
    categoria: "Mujer",
    precio: "S/174.90",
    otrasTiendas: "S/199.00",
    stock: "Disponible",
    imagen: "/images/adidas-terrex-tracefinder-2-w-mujer.jpg",
    mensaje:
      "Hola, quiero consultar stock del Adidas Terrex Tracefinder 2 W para mujer, precio S/174.90, otras tiendas S/199.00, tallas 36, 36.5, 37.5 y 38",
    tallas: "36 • 36.5 • 37.5 • 38",
    marca: "adidas",
  },
  {
    nombre: "Adidas Runblaze W",
    categoria: "Mujer",
    precio: "S/159.90",
    otrasTiendas: "S/179.00",
    stock: "Disponible",
    imagen: "/images/adidas-runblaze-w-mujer.jpg",
    mensaje:
      "Hola, quiero consultar stock del Adidas Runblaze W para mujer, precio S/159.90, otras tiendas S/179.00, tallas 36, 36.5, 37.5, 38 y 38.5",
    tallas: "36 • 36.5 • 37.5 • 38 • 38.5",
    marca: "adidas",
  },
  {
    nombre: "Adidas Runfalcon 5W",
    categoria: "Mujer",
    precio: "S/179.90",
    otrasTiendas: "S/199.00",
    stock: "Disponible",
    imagen: "/images/adidas-runfalcon-5w-mujer.jpg",
    mensaje:
      "Hola, quiero consultar stock del Adidas Runfalcon 5W para mujer, precio S/179.90, otras tiendas S/199.00, tallas 36 y 36.5",
    tallas: "36 • 36.5",
    marca: "adidas",
  },
  {
    nombre: "Adidas Galaxy 7",
    categoria: "Mujer",
    precio: "S/179.90",
    otrasTiendas: "S/199.00",
    stock: "Disponible",
    imagen: "/images/adidas-galaxy-7-mujer.jpg",
    mensaje:
      "Hola, quiero consultar stock del Adidas Galaxy 7 para mujer, precio S/179.90, otras tiendas S/199.00, tallas 36, 36.5, 37.5, 38 y 38.5",
    tallas: "36 • 36.5 • 37.5 • 38 • 38.5",
    marca: "adidas",
  },
];

const guiaNike = [
  { hombre: "5.5", mujer: "7", pe: "37", eu: "38", cm: "24" },
  { hombre: "6", mujer: "7.5", pe: "37.5", eu: "38.5", cm: "24" },
  { hombre: "6.5", mujer: "8", pe: "38", eu: "39", cm: "24.5" },
  { hombre: "7", mujer: "8.5", pe: "39", eu: "40", cm: "25" },
  { hombre: "7.5", mujer: "9", pe: "40", eu: "40.5", cm: "25.5" },
  { hombre: "8", mujer: "9.5", pe: "40.5", eu: "41", cm: "26" },
  { hombre: "8.5", mujer: "10", pe: "41", eu: "42", cm: "26.5" },
  { hombre: "9", mujer: "10.5", pe: "41.5", eu: "42.5", cm: "27" },
  { hombre: "9.5", mujer: "11", pe: "42", eu: "43", cm: "27.5" },
  { hombre: "10", mujer: "11.5", pe: "43", eu: "44", cm: "28" },
  { hombre: "10.5", mujer: "12", pe: "43.5", eu: "44.5", cm: "28.5" },
  { hombre: "11", mujer: "12.5", pe: "44", eu: "45", cm: "29" },
];

const guiaAdidas = [
  { hombre: "4", mujer: "5", ue: "36", cm: "22.1" },
  { hombre: "4.5", mujer: "5.5", ue: "36 2/3", cm: "22.5" },
  { hombre: "5", mujer: "6", ue: "37 1/3", cm: "22.9" },
  { hombre: "5.5", mujer: "6.5", ue: "38", cm: "23.3" },
  { hombre: "6", mujer: "7", ue: "38 2/3", cm: "23.8" },
  { hombre: "6.5", mujer: "7.5", ue: "39 1/3", cm: "24.2" },
  { hombre: "7", mujer: "8", ue: "40", cm: "24.6" },
  { hombre: "7.5", mujer: "8.5", ue: "40 2/3", cm: "25.0" },
  { hombre: "8", mujer: "9", ue: "41 1/3", cm: "25.5" },
  { hombre: "8.5", mujer: "9.5", ue: "42", cm: "25.9" },
  { hombre: "9", mujer: "10", ue: "42 2/3", cm: "26.3" },
  { hombre: "9.5", mujer: "10.5", ue: "43 1/3", cm: "26.7" },
];

function TablaGuiaNikeModal() {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
      <div className="grid grid-cols-5 border-b border-black/10 bg-black px-4 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
        <span>US H</span>
        <span>US M</span>
        <span>PE</span>
        <span>EU</span>
        <span>CM</span>
      </div>

      {guiaNike.map((item, index) => (
        <div
          key={`nike-modal-${index}`}
          className="grid grid-cols-5 border-b border-black/5 px-4 py-3 text-xs last:border-b-0 sm:text-sm"
        >
          <span>{item.hombre}</span>
          <span>{item.mujer}</span>
          <span>{item.pe}</span>
          <span>{item.eu}</span>
          <span>{item.cm}</span>
        </div>
      ))}
    </div>
  );
}

function TablaGuiaAdidasModal() {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
      <div className="grid grid-cols-4 border-b border-black/10 bg-black px-4 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
        <span>US H</span>
        <span>US M</span>
        <span>UE</span>
        <span>CM</span>
      </div>

      {guiaAdidas.map((item, index) => (
        <div
          key={`adidas-modal-${index}`}
          className="grid grid-cols-4 border-b border-black/5 px-4 py-3 text-xs last:border-b-0 sm:text-sm"
        >
          <span>{item.hombre}</span>
          <span>{item.mujer}</span>
          <span>{item.ue}</span>
          <span>{item.cm}</span>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [imagenSeleccionada, setImagenSeleccionada] =
    useState<ImagenModal | null>(null);
  const [mostrarGuiaModal, setMostrarGuiaModal] = useState(false);

  const beneficios = [
    "Atención rápida por WhatsApp",
    "Modelos urbanos y deportivos",
    "Stock y tallas por consulta",
    "Opciones para emprendedores y mayoristas",
    "Zapatillas para hombres y mujeres",
  ];

  const whatsapp = "51993170010";

  const seccionesMobile = [
    { nombre: "Inicio", id: "inicio" },
    { nombre: "Hombres", id: "hombres" },
    { nombre: "Mujeres", id: "mujeres" },
  ];

  const irASeccion = (id: string) => {
    const seccion = document.getElementById(id);
    if (!seccion) return;

    const offset = 70;
    const top =
      seccion.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  const abrirProducto = (producto: Producto) => {
    setMostrarGuiaModal(false);
    setImagenSeleccionada({
      tipo: "producto",
      src: producto.imagen,
      nombre: producto.nombre,
      producto,
    });
  };

  const abrirImagenSimple = (src: string, nombre: string) => {
    setMostrarGuiaModal(false);
    setImagenSeleccionada({
      tipo: "simple",
      src,
      nombre,
    });
  };

  const cerrarImagen = () => {
    setImagenSeleccionada(null);
    setMostrarGuiaModal(false);
  };

  return (
    <>
      <main className="min-h-screen bg-white text-black">
        <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
            <button
              type="button"
              onClick={() => irASeccion("inicio")}
              className="group flex items-center rounded-2xl p-1.5 text-left transition duration-300 hover:bg-black/[0.03] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] active:scale-[0.98]"
            >
              <img
                src="/images/logo-jc-sport.png"
                alt="JC Sport"
                className="h-12 w-auto object-contain transition duration-300 group-hover:scale-[1.04] group-hover:drop-shadow-[0_10px_18px_rgba(0,0,0,0.18)] sm:h-14 md:h-[88px]"
              />
            </button>

            <nav className="hidden gap-6 text-sm font-medium text-black/70 lg:flex">
              <button
                type="button"
                onClick={() => irASeccion("inicio")}
                className="transition hover:text-red-600"
              >
                Inicio
              </button>
              <button
                type="button"
                onClick={() => irASeccion("hombres")}
                className="transition hover:text-red-600"
              >
                Hombres
              </button>
              <button
                type="button"
                onClick={() => irASeccion("mujeres")}
                className="transition hover:text-red-600"
              >
                Mujeres
              </button>
            </nav>

            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-black px-3 py-2 text-xs font-semibold text-black transition hover:bg-black hover:text-white sm:px-4 sm:text-sm md:px-5 md:py-2.5"
            >
              WhatsApp
            </a>
          </div>

          <div className="border-t border-black/5 lg:hidden">
            <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {seccionesMobile.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => irASeccion(item.id)}
                  className="whitespace-nowrap rounded-full border border-black/10 px-3 py-2 text-xs font-semibold text-black/75 transition hover:border-red-500 hover:text-red-600"
                >
                  {item.nombre}
                </button>
              ))}
            </div>
          </div>
        </header>

        <section
          id="inicio"
          className="relative overflow-hidden border-b border-black/10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.08),transparent_32%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />

          <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-8 px-4 py-8 sm:px-6 sm:py-10 md:gap-14 md:py-20 lg:grid-cols-2">
            <div className="order-1">
              <div className="mb-4 md:mb-8">
                <img
                  src="/images/logo-jc-sport.png"
                  alt="JC Sport"
                  className="h-16 w-auto object-contain sm:h-20 md:h-40"
                />
              </div>

              <h1 className="max-w-2xl text-[2.2rem] font-black leading-[0.95] sm:text-5xl md:text-6xl">
                Zapatillas con estilo, precio competitivo y una identidad propia.
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-6 sm:gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/70 sm:text-sm md:text-lg">
                  Con respaldo de Fritz Sport
                </span>
                <img
                  src="/images/logo-fritz-sport.png"
                  alt="Fritz Sport"
                  className="h-8 w-auto object-contain sm:h-10 md:h-12"
                />
              </div>

              <div className="mt-5 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
                <button
                  type="button"
                  onClick={() => irASeccion("hombres")}
                  className="rounded-full bg-black px-5 py-3 text-xs font-semibold text-white transition hover:bg-red-600 sm:px-7 sm:text-sm"
                >
                  Ver colección hombre
                </button>

                <button
                  type="button"
                  onClick={() => irASeccion("mujeres")}
                  className="rounded-full border border-black/20 px-5 py-3 text-xs font-semibold text-black transition hover:border-red-500 hover:text-red-600 sm:px-7 sm:text-sm"
                >
                  Ver colección mujer
                </button>
              </div>
            </div>

            <div className="order-2">
              <div className="flex justify-center lg:justify-end">
                <div className="rounded-[1.8rem] bg-gradient-to-b from-black/10 via-black/5 to-black/10 p-[7px] shadow-[0_18px_50px_rgba(0,0,0,0.10)] sm:rounded-[2.2rem] sm:p-[10px]">
                  <div className="rounded-[1.5rem] border border-black/10 bg-white p-[4px] sm:rounded-[1.9rem] sm:p-[6px]">
                    <div className="overflow-hidden rounded-[1.2rem] border border-black/5 bg-[#f5f5f5] sm:rounded-[1.6rem]">
                      <video
                        src="/videos/hero-jc-sport.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-[280px] w-auto object-contain sm:h-[420px] md:h-[560px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-3 lg:col-span-2">
              <div className="grid gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-5">
                {beneficios.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-black/10 bg-white px-3 py-3 text-xs text-black/80 shadow-sm sm:px-4 sm:text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="hombres"
          className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16"
        >
          <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
            <img
              src="/images/logo-jc-sport.png"
              alt="JC Sport"
              className="h-12 w-auto object-contain sm:h-16 md:h-20"
            />
            <div>
              <h2 className="text-2xl font-black sm:text-3xl">
                Todos los productos para hombre
              </h2>
            </div>
          </div>

          <p className="max-w-2xl text-sm text-black/65 sm:text-base">
            Revisa los modelos disponibles y consulta stock, tallas y precios
            directo por WhatsApp.
          </p>

          <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {todosLosProductos.map((item) => (
              <div
                key={`${item.nombre}-${item.imagen}`}
                className="group overflow-hidden rounded-[1.4rem] border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.10)] sm:rounded-[1.8rem]"
              >
                <button
                  type="button"
                  onClick={() => abrirProducto(item)}
                  className="block aspect-[4/3] w-full overflow-hidden bg-[#f7f7f7] text-left sm:aspect-square"
                >
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </button>

                <div className="p-4 sm:p-5">
                  <div className="mb-2 flex items-center justify-between gap-2 sm:mb-3">
                    <p className="text-xs text-black/50 sm:text-sm">
                      {item.categoria}
                    </p>
                    <span className="rounded-full bg-black px-2.5 py-1 text-[10px] font-semibold text-white sm:px-3 sm:text-xs">
                      {item.stock}
                    </span>
                  </div>

                  <h3 className="min-h-[44px] text-base font-semibold leading-6 sm:min-h-[56px] sm:text-lg sm:leading-7">
                    {item.nombre}
                  </h3>

                  <p className="mt-2 text-base font-black text-black sm:text-lg">
                    {item.precio}
                  </p>

                  {item.otrasTiendas && (
                    <p className="mt-1 text-xs font-black text-red-600 sm:text-sm">
                      OTRAS TIENDAS: {item.otrasTiendas}
                    </p>
                  )}

                  <p className="mt-2 text-xs text-black/55 sm:mt-3 sm:text-sm">
                    Tallas: {item.tallas}
                  </p>

                  <a
                    href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
                      item.mensaje
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center rounded-full border border-black px-4 py-2.5 text-xs font-semibold text-black transition hover:bg-black hover:text-white sm:mt-5 sm:text-sm"
                  >
                    Consultar producto
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="mujeres" className="border-y border-black/10 bg-[#fafafa]">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16">
            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <img
                src="/images/logo-jc-sport.png"
                alt="JC Sport"
                className="h-12 w-auto object-contain sm:h-16 md:h-20"
              />
              <div>
                <h2 className="text-2xl font-black sm:text-3xl">
                  Todos los productos para mujer
                </h2>
              </div>
            </div>

            <p className="max-w-2xl text-sm text-black/65 sm:text-base">
              Explora nuestra colección de zapatillas para mujer y consulta
              tallas, disponibilidad y precios directo por WhatsApp.
            </p>

            <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {productosMujeres.map((item) => (
                <div
                  key={`${item.nombre}-${item.imagen}`}
                  className="group overflow-hidden rounded-[1.4rem] border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.10)] sm:rounded-[1.8rem]"
                >
                  <button
                    type="button"
                    onClick={() => abrirProducto(item)}
                    className="block aspect-[4/3] w-full overflow-hidden bg-[#f7f7f7] text-left sm:aspect-square"
                  >
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </button>

                  <div className="p-4 sm:p-5">
                    <div className="mb-2 flex items-center justify-between gap-2 sm:mb-3">
                      <p className="text-xs text-black/50 sm:text-sm">
                        {item.categoria}
                      </p>
                      <span className="rounded-full bg-black px-2.5 py-1 text-[10px] font-semibold text-white sm:px-3 sm:text-xs">
                        {item.stock}
                      </span>
                    </div>

                    <h3 className="min-h-[44px] text-base font-semibold leading-6 sm:min-h-[56px] sm:text-lg sm:leading-7">
                      {item.nombre}
                    </h3>

                    <p className="mt-2 text-base font-black text-black sm:text-lg">
                      {item.precio}
                    </p>

                    {item.otrasTiendas && (
                      <p className="mt-1 text-xs font-black text-red-600 sm:text-sm">
                        OTRAS TIENDAS: {item.otrasTiendas}
                      </p>
                    )}

                    <p className="mt-2 text-xs text-black/55 sm:mt-3 sm:text-sm">
                      Tallas: {item.tallas}
                    </p>

                    <a
                      href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
                        item.mensaje
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center rounded-full border border-black px-4 py-2.5 text-xs font-semibold text-black transition hover:bg-black hover:text-white sm:mt-5 sm:text-sm"
                    >
                      Consultar producto
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
          <div className="grid items-center gap-6 overflow-hidden rounded-[1.6rem] border border-black/10 bg-black p-5 text-white sm:gap-8 sm:rounded-[2rem] sm:p-8 md:grid-cols-2 md:p-12">
            <div>
              <div className="mb-4 sm:mb-6">
                <img
                  src="/images/logo-jc-sport.png"
                  alt="JC Sport"
                  className="h-20 w-auto object-contain brightness-0 invert sm:h-24 md:h-40"
                />
              </div>

              <div className="mb-4 h-1 w-16 rounded-full bg-red-600 sm:mb-5 sm:w-20" />
              <h2 className="mt-3 max-w-3xl text-2xl font-black sm:text-3xl md:text-4xl">
                No vendemos solo zapatillas: proyectamos actitud.
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-white/75 sm:mt-4 sm:text-base">
                Cada modelo que ves aquí está pensado para elevar tu presencia,
                tu outfit y tu forma de destacar. JC Sport mezcla estilo,
                identidad y selección visual para que no compres por comprar,
                sino para verte mejor.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-red-600 px-5 py-3 text-xs font-semibold text-white transition hover:bg-red-700 sm:px-6 sm:text-sm"
                >
                  Escribir por WhatsApp
                </a>

                <button
                  type="button"
                  onClick={() =>
                    abrirImagenSimple(
                      "/images/modelo-jc-deportes-hero.jpg",
                      "Imagen oficial JC Sport"
                    )
                  }
                  className="rounded-full border border-white/20 px-5 py-3 text-xs font-semibold text-white transition hover:border-red-500 hover:text-red-400 sm:px-6 sm:text-sm"
                >
                  Ver imagen de marca
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                abrirImagenSimple(
                  "/images/modelo-jc-deportes-hero.jpg",
                  "Imagen oficial JC Sport"
                )
              }
              className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/5 text-left sm:rounded-[1.6rem]"
            >
              <img
                src="/images/modelo-jc-deportes-hero.jpg"
                alt="Modelo oficial JC Sport"
                className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
              />
            </button>
          </div>
        </section>

        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-4 right-4 z-50 rounded-full bg-red-600 px-4 py-3 text-xs font-bold text-white shadow-[0_12px_30px_rgba(239,68,68,0.35)] transition hover:scale-105 hover:bg-red-700 sm:bottom-6 sm:right-6 sm:px-5 sm:text-sm"
        >
          WhatsApp
        </a>
      </main>

      {imagenSeleccionada && (
        <div
          className="fixed inset-0 z-[999] bg-black/80 p-4 sm:p-6"
          onClick={cerrarImagen}
        >
          <div
            className={`relative mx-auto h-full max-h-[95vh] w-full max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-2xl ${
              imagenSeleccionada.tipo === "producto"
                ? "grid lg:grid-cols-[1.2fr_0.8fr]"
                : "flex items-center justify-center"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={cerrarImagen}
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold text-black shadow-lg transition hover:bg-red-600 hover:text-white"
            >
              ×
            </button>

            {imagenSeleccionada.tipo === "producto" ? (
              <>
                <div className="flex items-center justify-center bg-[#f7f7f7] p-4 sm:p-6">
                  <img
                    src={imagenSeleccionada.src}
                    alt={imagenSeleccionada.nombre}
                    className="max-h-[70vh] w-auto max-w-full object-contain"
                  />
                </div>

                <div className="h-full overflow-y-auto border-l border-black/10 bg-white p-5 sm:p-7">
                  <div className="mb-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
                      {imagenSeleccionada.producto.marca}
                    </p>
                    <h3 className="mt-2 text-2xl font-black leading-tight">
                      {imagenSeleccionada.producto.nombre}
                    </h3>
                    <p className="mt-2 text-sm text-black/60">
                      {imagenSeleccionada.producto.categoria}
                    </p>
                  </div>

                  <div className="mb-5 border-b border-black/10 pb-5">
                    <p className="text-2xl font-black">
                      {imagenSeleccionada.producto.precio}
                    </p>
                    {imagenSeleccionada.producto.otrasTiendas && (
                      <p className="mt-2 text-sm font-bold text-red-600">
                        OTRAS TIENDAS: {imagenSeleccionada.producto.otrasTiendas}
                      </p>
                    )}
                  </div>

                  <div className="mb-5 flex items-center justify-between gap-3 border-b border-black/10 pb-5">
                    <div>
                      <p className="text-sm font-semibold text-black">
                        Selecciona tu talla
                      </p>
                      <p className="mt-2 text-sm text-black/65">
                        {imagenSeleccionada.producto.tallas}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setMostrarGuiaModal((prev) => !prev)}
                      className="shrink-0 rounded-full border border-black px-4 py-2 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
                    >
                      Guía de tallas
                    </button>
                  </div>

                  {mostrarGuiaModal && (
                    <div className="mb-5 rounded-[1.4rem] border border-black/10 bg-[#fafafa] p-4">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <h4 className="text-lg font-black">
                          Guía de tallas {imagenSeleccionada.producto.marca}
                        </h4>
                        <span className="rounded-full bg-black px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                          Referencia
                        </span>
                      </div>

                      {imagenSeleccionada.producto.marca === "Nike" ? (
                        <TablaGuiaNikeModal />
                      ) : (
                        <TablaGuiaAdidasModal />
                      )}
                    </div>
                  )}

                  <div className="mb-5 flex items-center gap-3">
                    <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                      {imagenSeleccionada.producto.stock}
                    </span>
                    <p className="text-sm text-black/55">
                      Consulta disponibilidad real por WhatsApp.
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
                      imagenSeleccionada.producto.mensaje
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
                  >
                    Consultar por WhatsApp
                  </a>
                </div>
              </>
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[#f7f7f7] p-4">
                <img
                  src={imagenSeleccionada.src}
                  alt={imagenSeleccionada.nombre}
                  className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}