"use client";

import { useState } from "react";

const todosLosProductos = [
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
  },
];

const productosMujeres = [
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
  },
];

type ImagenModal = {
  src: string;
  nombre: string;
};

export default function Home() {
  const [imagenSeleccionada, setImagenSeleccionada] =
    useState<ImagenModal | null>(null);

  const categorias = [
    "Hombre",
    "Mujer",
    "Niños",
    "Running",
    "Urbano",
    "Fútbol",
  ];

  const marcas = ["Nike", "Adidas", "Puma", "Reebok"];

  const beneficios = [
    "Atención rápida por WhatsApp",
    "Modelos urbanos y deportivos",
    "Stock y tallas por consulta",
    "Opciones para emprendedores y mayoristas",
    "Zapatillas para hombres y mujeres",
  ];

  const whatsapp = "51993170010";

  const irASeccion = (id: string) => {
    const seccion = document.getElementById(id);
    if (!seccion) return;

    const offset = 40;
    const top =
      seccion.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  const abrirImagen = (src: string, nombre: string) => {
    setImagenSeleccionada({ src, nombre });
  };

  const cerrarImagen = () => {
    setImagenSeleccionada(null);
  };

  return (
    <>
      <main className="min-h-screen bg-white text-black">
        <header className="border-b border-black/10 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
            <button
              type="button"
              onClick={() => irASeccion("inicio")}
              className="flex items-center text-left"
            >
              <img
                src="/images/logo-jc-sport.png"
                alt="JC Sport"
                className="h-24 w-auto object-contain md:h-32"
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
                onClick={() => irASeccion("categorias")}
                className="transition hover:text-red-600"
              >
                Categorías
              </button>
              <button
                type="button"
                onClick={() => irASeccion("marcas")}
                className="transition hover:text-red-600"
              >
                Marcas
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
              <button
                type="button"
                onClick={() => irASeccion("mayoristas")}
                className="transition hover:text-red-600"
              >
                Mayoristas
              </button>
            </nav>

            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-black px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-black hover:text-white md:px-5"
            >
              WhatsApp
            </a>
          </div>
        </header>

        <section
          id="inicio"
          className="relative overflow-hidden border-b border-black/10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.08),transparent_32%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 py-14 md:grid-cols-2 md:py-20">
            <div>
              <div className="mb-8">
                <img
                  src="/images/logo-jc-sport.png"
                  alt="JC Sport"
                  className="h-40 w-auto object-contain md:h-52"
                />
              </div>

              <h1 className="max-w-2xl text-4xl font-black leading-tight md:text-6xl">
                Zapatillas con estilo, precio competitivo y una identidad propia.
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="text-base font-semibold uppercase tracking-[0.22em] text-black/70 md:text-lg">
                  Con respaldo de Fritz Sport
                </span>
                <img
                  src="/images/logo-fritz-sport.png"
                  alt="Fritz Sport"
                  className="h-10 w-auto object-contain md:h-12"
                />
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => irASeccion("hombres")}
                  className="rounded-full bg-black px-7 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
                >
                  Ver colección hombre
                </button>

                <button
                  type="button"
                  onClick={() => irASeccion("mujeres")}
                  className="rounded-full border border-black/20 px-7 py-3 text-sm font-semibold text-black transition hover:border-red-500 hover:text-red-600"
                >
                  Ver colección mujer
                </button>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {beneficios.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black/80 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="flex justify-center">
                <div className="rounded-[2.2rem] bg-gradient-to-b from-black/10 via-black/5 to-black/10 p-[10px] shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
                  <div className="rounded-[1.9rem] border border-black/10 bg-white p-[6px]">
                    <div className="overflow-hidden rounded-[1.6rem] border border-black/5 bg-[#f5f5f5]">
                      <video
                        src="/videos/hero-jc-sport.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-[500px] w-auto object-contain md:h-[560px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="categorias" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-6 flex items-center gap-4">
            <img
              src="/images/logo-jc-sport.png"
              alt="JC Sport"
              className="h-20 w-auto object-contain"
            />
            <div>
              <h2 className="text-3xl font-black">Compra según tu estilo</h2>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categorias.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-red-500/30 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold">{item}</h3>
                <div className="mt-3 h-[2px] w-12 rounded-full bg-red-600" />
                <p className="mt-4 text-sm text-black/60">
                  Sección lista para mostrar productos filtrados por categoría.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="marcas" className="border-y border-black/10 bg-[#fafafa]">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-6 flex items-center gap-4">
              <img
                src="/images/logo-jc-sport.png"
                alt="JC Sport"
                className="h-20 w-auto object-contain"
              />
              <div>
                <h2 className="text-3xl font-black">
                  Trabajamos con tus marcas favoritas
                </h2>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {marcas.map((marca) => (
                <div
                  key={marca}
                  className="rounded-3xl border border-black/10 bg-white px-6 py-8 text-center text-xl font-black shadow-sm transition hover:border-red-500/30 hover:text-red-600"
                >
                  {marca}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <div className="mb-4 flex items-center gap-4">
                <img
                  src="/images/logo-jc-sport.png"
                  alt="JC Sport"
                  className="h-20 w-auto object-contain"
                />
              </div>

              <h2 className="text-3xl font-black">
                Presentación visual más fuerte para vender mejor
              </h2>

              <p className="mt-4 max-w-xl text-black/65">
                Usa una imagen editorial donde el modelo sostenga el producto.
                Esto hace que la web se sienta más profesional, más real y con
                mucha más presencia de marca.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Consultar por WhatsApp
                </a>

                <button
                  type="button"
                  onClick={() =>
                    abrirImagen(
                      "/images/modelo-jc-deportes-producto.jpg",
                      "Modelo JC Sport presentando producto"
                    )
                  }
                  className="rounded-full border border-black px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
                >
                  Ver imagen completa
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                abrirImagen(
                  "/images/modelo-jc-deportes-producto.jpg",
                  "Modelo JC Sport presentando producto"
                )
              }
              className="order-1 overflow-hidden rounded-[2rem] border border-black/10 bg-[#fafafa] p-3 text-left shadow-[0_25px_70px_rgba(0,0,0,0.08)] md:order-2"
            >
              <div className="overflow-hidden rounded-[1.6rem] bg-white">
                <img
                  src="/images/modelo-jc-deportes-producto.jpg"
                  alt="Modelo JC Sport mostrando zapatilla"
                  className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
                />
              </div>
            </button>
          </div>
        </section>

        <section id="hombres" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-6 flex items-center gap-4">
            <img
              src="/images/logo-jc-sport.png"
              alt="JC Sport"
              className="h-20 w-auto object-contain"
            />
            <div>
              <h2 className="text-3xl font-black">
                Todos los productos para hombre
              </h2>
            </div>
          </div>

          <p className="max-w-2xl text-black/65">
            Revisa los modelos disponibles y consulta stock, tallas y precios
            directo por WhatsApp.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {todosLosProductos.map((item) => (
              <div
                key={`${item.nombre}-${item.imagen}`}
                className="group overflow-hidden rounded-[1.8rem] border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.10)]"
              >
                <button
                  type="button"
                  onClick={() => abrirImagen(item.imagen, item.nombre)}
                  className="block aspect-square w-full overflow-hidden bg-[#f7f7f7] text-left"
                >
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </button>

                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <p className="text-sm text-black/50">{item.categoria}</p>
                    <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                      {item.stock}
                    </span>
                  </div>

                  <h3 className="min-h-[56px] text-lg font-semibold leading-7">
                    {item.nombre}
                  </h3>

                  <p className="mt-2 text-lg font-black text-black">
                    {item.precio}
                  </p>

                  {item.otrasTiendas && (
                    <p className="mt-1 text-sm font-black text-red-600">
                      OTRAS TIENDAS: {item.otrasTiendas}
                    </p>
                  )}

                  <p className="mt-3 text-sm text-black/55">
                    Tallas: {item.tallas}
                  </p>

                  <a
                    href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
                      item.mensaje
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center rounded-full border border-black px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
                  >
                    Consultar producto
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="mujeres" className="border-y border-black/10 bg-[#fafafa]">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-6 flex items-center gap-4">
              <img
                src="/images/logo-jc-sport.png"
                alt="JC Sport"
                className="h-20 w-auto object-contain"
              />
              <div>
                <h2 className="text-3xl font-black">
                  Todos los productos para mujer
                </h2>
              </div>
            </div>

            <p className="max-w-2xl text-black/65">
              Explora nuestra colección de zapatillas para mujer y consulta
              tallas, disponibilidad y precios directo por WhatsApp.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {productosMujeres.map((item) => (
                <div
                  key={`${item.nombre}-${item.imagen}`}
                  className="group overflow-hidden rounded-[1.8rem] border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.10)]"
                >
                  <button
                    type="button"
                    onClick={() => abrirImagen(item.imagen, item.nombre)}
                    className="block aspect-square w-full overflow-hidden bg-[#f7f7f7] text-left"
                  >
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </button>

                  <div className="p-5">
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <p className="text-sm text-black/50">{item.categoria}</p>
                      <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                        {item.stock}
                      </span>
                    </div>

                    <h3 className="min-h-[56px] text-lg font-semibold leading-7">
                      {item.nombre}
                    </h3>

                    <p className="mt-2 text-lg font-black text-black">
                      {item.precio}
                    </p>

                    {item.otrasTiendas && (
                      <p className="mt-1 text-sm font-black text-red-600">
                        OTRAS TIENDAS: {item.otrasTiendas}
                      </p>
                    )}

                    <p className="mt-3 text-sm text-black/55">
                      Tallas: {item.tallas}
                    </p>

                    <a
                      href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
                        item.mensaje
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center rounded-full border border-black px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
                    >
                      Consultar producto
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="mayoristas" className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-4">
                <img
                  src="/images/logo-jc-sport.png"
                  alt="JC Sport"
                  className="h-20 w-auto object-contain"
                />
              </div>

              <h2 className="text-3xl font-black">
                También vendemos para emprendedores
              </h2>

              <p className="mt-4 max-w-xl text-black/65">
                Si quieres comprar por volumen o revender, podemos atenderte con
                precios especiales, stock por consulta y atención directa.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-black/10 bg-[#fafafa] p-6 shadow-sm">
              <ul className="space-y-3 text-black/80">
                <li>• Atención rápida por WhatsApp</li>
                <li>• Consulta de stock y tallas</li>
                <li>• Precios para emprendedores</li>
                <li>• Productos por marca y categoría</li>
                <li>• Pedidos directos y simples</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-center gap-8 overflow-hidden rounded-[2rem] border border-black/10 bg-black p-8 text-white md:grid-cols-2 md:p-12">
            <div>
              <div className="mb-6">
                <img
                  src="/images/logo-jc-sport.png"
                  alt="JC Sport"
                  className="h-32 w-auto object-contain brightness-0 invert md:h-40"
                />
              </div>

              <div className="mb-5 h-1 w-20 rounded-full bg-red-600" />
              <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-4xl">
                Más que una tienda: una marca con identidad visual.
              </h2>
              <p className="mt-4 max-w-2xl text-white/75">
                Integra al modelo como imagen principal de campañas, portada,
                promociones y lanzamientos. Así tu web se ve mucho más premium y
                profesional.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Escribir por WhatsApp
                </a>

                <button
                  type="button"
                  onClick={() =>
                    abrirImagen(
                      "/images/modelo-jc-deportes-hero.jpg",
                      "Imagen oficial JC Sport"
                    )
                  }
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-500 hover:text-red-400"
                >
                  Ver imagen de marca
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                abrirImagen(
                  "/images/modelo-jc-deportes-hero.jpg",
                  "Imagen oficial JC Sport"
                )
              }
              className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5 text-left"
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
          className="fixed bottom-6 right-6 z-50 rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(239,68,68,0.35)] transition hover:scale-105 hover:bg-red-700"
        >
          WhatsApp
        </a>
      </main>

      {imagenSeleccionada && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 p-4"
          onClick={cerrarImagen}
        >
          <div
            className="relative max-h-[95vh] max-w-[95vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={cerrarImagen}
              className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-black shadow-lg transition hover:bg-red-600 hover:text-white"
            >
              ×
            </button>

            <img
              src={imagenSeleccionada.src}
              alt={imagenSeleccionada.nombre}
              className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            />

            <p className="mt-4 text-center text-sm font-medium text-white/90">
              {imagenSeleccionada.nombre}
            </p>
          </div>
        </div>
      )}
    </>
  );
}