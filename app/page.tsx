"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  Circle,
  Menu,
  MessageCircle,
  Ruler,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Upload,
  User,
  Shirt,
  Camera,
  Sparkles,
  Lock,
  Crown,
  Users,
  BadgeCheck,
  MapPin,
  Mail,
  Phone,
  X,
} from "lucide-react";

type Marca = "NIKE" | "ADIDAS" | "JORDAN";
type CategoriaFiltro = "hombre" | "mujer";

type Producto = {
  id: number;
  nombre: string;
  marca: Marca;
  categoria: "hombre" | "mujer";
  coleccion: "core" | "select" | "street" | "presence";
  precio: string;
  tallas: string[];
  imagen: string;
  otrasTiendas?: string;
};

type StylistState = {
  estilo: "" | "limpio" | "urbano" | "diario" | "fuerte" | "deportivo";
  ocasion:
    | ""
    | "salida"
    | "diario"
    | "universidad"
    | "trabajo informal"
    | "contenido";
  colorPreferido: string;
  presupuesto: string;
  fotoUsuario: string | null;
  fotoPantalon: string | null;
  fotoPolo: string | null;
};

type StylistRecommendation = {
  coleccion: Producto["coleccion"];
  coleccionNombre: string;
  descriptor: string;
  razon: string;
  recomendacion: string;
};

type ComunidadFormState = {
  nombreCompleto: string;
  telefono: string;
  correo: string;
  distrito: string;
  tallaUsual: string;
  marcasQueUsa: string;
  estiloPreferido: string;
  tipoDeUso: string;
  direccionFrecuente: string;
  referenciaEntrega: string;
  dniOpcional: string;
  consentimiento: boolean;
};

const WHATSAPP_NUMERO = "51993170010";
const WHATSAPP_MENSAJE =
  "Hola, vengo desde la web de CASTL y quiero más información.";
const INSTAGRAM_URL = "https://www.instagram.com/castlpe/";
const FACEBOOK_URL = "https://www.facebook.com/castlpe/";
const TIKTOK_URL = "https://tiktok.com/@castlpe";
const COMUNIDAD_WHATSAPP_CHANNEL =
  "https://whatsapp.com/channel/0029VbBhbGRD8SDp84fUgM1g";

const productos: Producto[] = [
  {
    id: 1,
    nombre: "Nike Air Force 1 07",
    marca: "NIKE",
    categoria: "hombre",
    coleccion: "core",
    precio: "S/349.00",
    tallas: ["40", "40.5", "41", "42", "42.5", "43", "44"],
    imagen: "/images/air-force-1-07-hombre.jpg",
    otrasTiendas: "S/549.00",
  },
  {
    id: 2,
    nombre: "Nike Air Max E",
    marca: "NIKE",
    categoria: "hombre",
    coleccion: "select",
    precio: "S/309.00",
    tallas: ["41", "42", "42.5", "43", "44"],
    imagen: "/images/air-force-1-07-hombre-crema.jpg",
    otrasTiendas: "S/469.00",
  },
  {
    id: 3,
    nombre: "Nike Interact Run EasyOn",
    marca: "NIKE",
    categoria: "hombre",
    coleccion: "presence",
    precio: "S/299.00",
    tallas: ["42", "43", "44"],
    imagen: "/images/nike-interact-run-easyon-hombre.jpg",
    otrasTiendas: "S/399.00",
  },
  {
    id: 4,
    nombre: "Jordan Flight Court",
    marca: "NIKE",
    categoria: "hombre",
    coleccion: "presence",
    precio: "S/349.00",
    tallas: ["40", "41", "42", "42.5", "43", "44"],
    imagen: "/images/jordan-flight-court-hombre.jpg",
    otrasTiendas: "S/469.00",
  },
  {
    id: 5,
    nombre: "Nike Downshift",
    marca: "NIKE",
    categoria: "hombre",
    coleccion: "core",
    precio: "S/199.00",
    tallas: ["40", "42", "42.5", "43", "44"],
    imagen: "/images/nike-downshift-court-hombre.jpg",
    otrasTiendas: "S/229.00",
  },
  {
    id: 6,
    nombre: "Nike Run Defy",
    marca: "NIKE",
    categoria: "hombre",
    coleccion: "presence",
    precio: "S/169.00",
    tallas: ["40", "42", "42.5", "43", "44"],
    imagen: "/images/nike-run-defy-hombre.jpg",
    otrasTiendas: "S/199.00",
  },
  {
    id: 7,
    nombre: "Nike Mercurial Superfly 10 Club",
    marca: "NIKE",
    categoria: "hombre",
    coleccion: "street",
    precio: "S/200.00",
    tallas: ["42.5", "43", "44", "45"],
    imagen: "/images/nike-mercurial-superfly-10-club-hombre.jpg",
    otrasTiendas: "S/339.00",
  },
  {
    id: 8,
    nombre: "Adidas Grand Court Alpha 00s",
    marca: "ADIDAS",
    categoria: "hombre",
    coleccion: "select",
    precio: "S/249.00",
    tallas: ["40", "40.5", "41", "42", "43.5"],
    imagen: "/images/grand-court-alpha-00s-hombre.jpg",
    otrasTiendas: "S/279.00",
  },
  {
    id: 9,
    nombre: "Adidas Break Start",
    marca: "ADIDAS",
    categoria: "hombre",
    coleccion: "core",
    precio: "S/209.90",
    tallas: ["40", "40.5", "41", "42", "43.5"],
    imagen: "/images/adidas-break-start-hombre.jpg",
    otrasTiendas: "S/229.00",
  },
  {
    id: 10,
    nombre: "Adidas Streettalk",
    marca: "ADIDAS",
    categoria: "hombre",
    coleccion: "street",
    precio: "S/179.90",
    tallas: ["40", "40.5", "41", "42", "42.5", "43.5"],
    imagen: "/images/adidas-streettalk-hombre.jpg",
    otrasTiendas: "S/209.00",
  },
  {
    id: 11,
    nombre: "Adidas Breaknet 3.0",
    marca: "ADIDAS",
    categoria: "hombre",
    coleccion: "core",
    precio: "S/209.90",
    tallas: ["40", "42.5", "43.5", "44"],
    imagen: "/images/adidas-breaknet-3-0-hombre.jpg",
    otrasTiendas: "S/229.00",
  },
  {
    id: 12,
    nombre: "Adidas Barreda",
    marca: "ADIDAS",
    categoria: "hombre",
    coleccion: "select",
    precio: "S/229.00",
    tallas: ["40", "40.5", "41", "42", "42.5", "43.5"],
    imagen: "/images/adidas-barreda-hombre.jpg",
    otrasTiendas: "S/249.00",
  },
  {
    id: 13,
    nombre: "Adidas Break Start",
    marca: "ADIDAS",
    categoria: "hombre",
    coleccion: "select",
    precio: "S/219.00",
    tallas: ["40", "40.5", "41", "42", "42.5", "43.5"],
    imagen: "/images/adidas-break-start-hombre-2.jpg",
    otrasTiendas: "S/249.00",
  },
  {
    id: 14,
    nombre: "Adidas F50 Messi Club Moqueta",
    marca: "ADIDAS",
    categoria: "hombre",
    coleccion: "street",
    precio: "S/169.00",
    tallas: ["40", "41", "43.5", "44", "44.5", "46"],
    imagen: "/images/adidas-f50-messi-club-moqueta-hombre.jpg",
    otrasTiendas: "S/249.00",
  },
  {
    id: 15,
    nombre: "Nike Air Force 1",
    marca: "NIKE",
    categoria: "mujer",
    coleccion: "core",
    precio: "S/399.00",
    tallas: ["37.5", "38", "38.5", "39"],
    imagen: "/images/air-force-1-mujeres.jpg",
    otrasTiendas: "S/569.00",
  },
  {
    id: 16,
    nombre: "Air Max 90 NN",
    marca: "NIKE",
    categoria: "mujer",
    coleccion: "select",
    precio: "S/449.00",
    tallas: ["36", "37.5", "38", "38.5", "39", "40"],
    imagen: "/images/air-max-90-nn-mujer.jpg",
    otrasTiendas: "S/617.89",
  },
  {
    id: 17,
    nombre: "Nike Dunk Low Next Nature",
    marca: "NIKE",
    categoria: "mujer",
    coleccion: "street",
    precio: "S/449.00",
    tallas: ["36.5", "37.5", "38", "38.5", "39", "40"],
    imagen: "/images/nike-dunk-low-next-nature-mujer.jpg",
    otrasTiendas: "S/569.00",
  },
  {
    id: 18,
    nombre: "Nike Air Force 1 107 REC 6",
    marca: "NIKE",
    categoria: "mujer",
    coleccion: "select",
    precio: "S/439.00",
    tallas: ["36", "36.5", "37.5", "38", "38.5", "39", "40"],
    imagen: "/images/air-force-1-107-rec-6-mujer.jpg",
    otrasTiendas: "S/549.00",
  },
];

const productosCatalogo: Producto[] = [
  {
    id: 101,
    nombre: "Nike Air Force 1 07",
    marca: "NIKE",
    categoria: "hombre",
    coleccion: "core",
    precio: "S/349.00",
    tallas: ["40", "40.5", "41", "42", "42.5", "43", "44"],
    imagen: "/images/air-force-1-07-hombre.jpg",
    otrasTiendas: "S/549.00",
  },
  {
    id: 102,
    nombre: "Nike Air Max E",
    marca: "NIKE",
    categoria: "hombre",
    coleccion: "select",
    precio: "S/399.00",
    tallas: ["41", "42" , "42.5", "43", "42"],
    imagen: "/images/air-force-1-07-hombre-crema.jpg",
    otrasTiendas: "S/469.00",
  },
  {
    id: 103,
    nombre: "Nike Interact Run EasyOn",
    marca: "NIKE",
    categoria: "hombre",
    coleccion: "presence",
    precio: "S/299.00",
    tallas: ["42", "43", "44"],
    imagen: "/images/nike-interact-run-easyon-hombre.jpg",
    otrasTiendas: "S/399.00",
  },
  {
    id: 104,
    nombre: "Jordan Flight Court",
    marca: "NIKE",
    categoria: "hombre",
    coleccion: "presence",
    precio: "S/349.00",
    tallas: ["40", "41", "42", "42.5", "43", "44"],
    imagen: "/images/jordan-flight-court-hombre.jpg",
    otrasTiendas: "S/469.00",
  },
  {
    id: 105,
    nombre: "Nike Downshift",
    marca: "NIKE",
    categoria: "hombre",
    coleccion: "core",
    precio: "S/199.00",
    tallas: ["40", "42", "42.5", "43", "44"],
    imagen: "/images/nike-downshift-court-hombre.jpg",
    otrasTiendas: "S/229.00",
  },
  {
    id: 106,
    nombre: "Nike Run Defy",
    marca: "NIKE",
    categoria: "hombre",
    coleccion: "presence",
    precio: "S/169.00",
    tallas: ["40", "42", "42.5", "43", "44"],
    imagen: "/images/nike-run-defy-hombre.jpg",
    otrasTiendas: "S/199.00",
  },
  {
    id: 107,
    nombre: "Nike Mercurial Superfly 10 Club",
    marca: "NIKE",
    categoria: "hombre",
    coleccion: "street",
    precio: "S/200.00",
    tallas: ["42.5", "43", "44", "45"],
    imagen: "/images/nike-mercurial-superfly-10-club-hombre.jpg",
    otrasTiendas: "S/339.00",
  },
  {
    id: 108,
    nombre: "Adidas Grand Court Alpha 00s",
    marca: "ADIDAS",
    categoria: "hombre",
    coleccion: "select",
    precio: "S/249.00",
    tallas: ["40", "40.5", "41", "42", "43.5"],
    imagen: "/images/grand-court-alpha-00s-hombre.jpg",
    otrasTiendas: "S/279.00",
  },
  {
    id: 109,
    nombre: "Adidas Break Start",
    marca: "ADIDAS",
    categoria: "hombre",
    coleccion: "core",
    precio: "S/209.90",
    tallas: ["40", "40.5", "41", "42", "43.5"],
    imagen: "/images/adidas-break-start-hombre.jpg",
    otrasTiendas: "S/229.00",
  },
  {
    id: 110,
    nombre: "Adidas Streettalk",
    marca: "ADIDAS",
    categoria: "hombre",
    coleccion: "street",
    precio: "S/179.90",
    tallas: ["40", "40.5", "41", "42", "42.5", "43.5"],
    imagen: "/images/adidas-streettalk-hombre.jpg",
    otrasTiendas: "S/209.00",
  },
  {
    id: 111,
    nombre: "Adidas Breaknet 3.0",
    marca: "ADIDAS",
    categoria: "hombre",
    coleccion: "core",
    precio: "S/209.90",
    tallas: ["40", "42.5", "43.5", "44"],
    imagen: "/images/adidas-breaknet-3-0-hombre.jpg",
    otrasTiendas: "S/229.00",
  },
  {
    id: 112,
    nombre: "Adidas Barreda",
    marca: "ADIDAS",
    categoria: "hombre",
    coleccion: "select",
    precio: "S/229.00",
    tallas: ["40", "40.5", "41", "42", "42.5", "43.5"],
    imagen: "/images/adidas-barreda-hombre.jpg",
    otrasTiendas: "S/249.00",
  },
  {
    id: 113,
    nombre: "Adidas Break Start",
    marca: "ADIDAS",
    categoria: "hombre",
    coleccion: "select",
    precio: "S/219.00",
    tallas: ["40", "40.5", "41", "42", "42.5", "43.5"],
    imagen: "/images/adidas-break-start-hombre-2.jpg",
    otrasTiendas: "S/249.00",
  },
  {
    id: 114,
    nombre: "Adidas Goleto IX TF",
    marca: "ADIDAS",
    categoria: "hombre",
    coleccion: "street",
    precio: "S/155.00",
    tallas: [
      "40",
      "40.5",
      "41",
      "42",
      "42.5",
      "43.5",
      "44",
      "44.5",
      "45.5",
      "46",
      "46.5",
    ],
    imagen: "/images/adidas-goleto-ix-tf-hombre.jpg",
    otrasTiendas: "S/169.00",
  },
  {
    id: 115,
    nombre: "Adidas F50 Club IN",
    marca: "ADIDAS",
    categoria: "hombre",
    coleccion: "street",
    precio: "S/229.00",
    tallas: ["40", "40.5", "41", "42", "42.5", "43.5"],
    imagen: "/images/adidas-f50-club-in-hombre.jpg",
    otrasTiendas: "S/259.00",
  },
  {
    id: 116,
    nombre: "Nike Air Force 1 Mid 07 LE 7",
    marca: "NIKE",
    categoria: "hombre",
    coleccion: "presence",
    precio: "S/449.00",
    tallas: ["42", "42.5", "43", "44", "44.5", "46"],
    imagen: "/images/nike-air-force-1-mid-07-le-7-hombre.jpg",
    otrasTiendas: "S/629.00",
  },
  {
    id: 117,
    nombre: "Adidas Barreda Decode Mer",
    marca: "ADIDAS",
    categoria: "hombre",
    coleccion: "presence",
    precio: "S/329.00",
    tallas: ["40", "40.5", "41", "42" , "42.5" ,"43.5" ],
    imagen: "/images/nike-air-huarache-hombre.jpg",
    otrasTiendas: "S/349.00",
  },
  {
    id: 118,
    nombre: "Nike Air Zoom Pegas",
    marca: "NIKE",
    categoria: "hombre",
    coleccion: "presence",
    precio: "S/369.00",
    tallas: ["40", "40.5", "41", "42", "42.5", "43", "44", "44.5"],
    imagen: "/images/nike-air-zoom-pegasus-hombre.jpg",
    otrasTiendas: "S/619.00",
  },
  {
    id: 119,
    nombre: "Adidas Courtblock",
    marca: "ADIDAS",
    categoria: "hombre",
    coleccion: "select",
    precio: "S/199.00",
    tallas: ["40.5", "41", "42", "42.5", "43.5", "44.5"],
    imagen: "/images/grand-court-td-lifestyle-court-casual-hombre.jpg",
    otrasTiendas: "S/209.00",
  },
  {
    id: 120,
    nombre: "Adidas Runblaze M",
    marca: "ADIDAS",
    categoria: "hombre",
    coleccion: "select",
    precio: "S/159.00",
    tallas: ["40", "40.5", "41", "42", "42.5", "43.5",],
    imagen: "/images/adidas-vs-pace-2-0-hombre.jpg",
    otrasTiendas: "S/179.00",
  },
  {
    id: 121,
    nombre: "Adidas Response Runner 2",
    marca: "ADIDAS",
    categoria: "hombre",
    coleccion: "street",
    precio: "S/179.00",
    tallas: ["41", "42", "44", "44.5"],
    imagen: "/images/predator-essentials-25-5-tf-hombre.jpg",
    otrasTiendas: "S/189.00",
  },
  {
    id: 122,
    nombre: "Adidas Duramo SL2",
    marca: "ADIDAS",
    categoria: "hombre",
    coleccion: "street",
    precio: "S/209.00",
    tallas: ["40", "40.5", "41", "42", "42.5", "43.5", "44", "44.5"],
    imagen: "/images/predator-league-tf-hombre.jpg",
    otrasTiendas: "S/229.00",
  },
  {
    id: 123,
    nombre: "Adidas Running Switch Move",
    marca: "ADIDAS",
    categoria: "hombre",
    coleccion: "street",
    precio: "S/167.00",
    tallas: ["40.5", "44", "44.5"],
    imagen: "/images/adidas-f50-messi-club-moqueta-hombre.jpg",
    otrasTiendas: "S/179.00",
  },
  {
    id: 124,
    nombre: "Adidas Hoops Classic",
    marca: "ADIDAS",
    categoria: "hombre",
    coleccion: "presence",
    precio: "S/249.00",
    tallas: ["40", "40.5", "41", "42", "42.5", "43.5"],
    imagen: "/images/adidas-defiant-speed-2-m-hombre.jpg",
    otrasTiendas: "S/259.00",
  },
  {
    id: 201,
    nombre: "Nike Air Force 1",
    marca: "NIKE",
    categoria: "mujer",
    coleccion: "core",
    precio: "S/389.00",
    tallas: ["37.5", "38", "38.5", "39"],
    imagen: "/images/air-force-1-mujeres.jpg",
    otrasTiendas: "S/569.00",
  },
  {
    id: 202,
    nombre: "Air Max 90 NN",
    marca: "NIKE",
    categoria: "mujer",
    coleccion: "select",
    precio: "S/449.00",
    tallas: ["36", "37.5", "38", "38.5", "39", "40"],
    imagen: "/images/air-max-90-nn-mujer.jpg",
    otrasTiendas: "S/617.89",
  },
  {
    id: 203,
    nombre: "Nike Dunk Low Next Nature",
    marca: "NIKE",
    categoria: "mujer",
    coleccion: "street",
    precio: "S/449.00",
    tallas: ["36.5", "37.5", "38", "38.5", "39", "40"],
    imagen: "/images/nike-dunk-low-next-nature-mujer.jpg",
    otrasTiendas: "S/569.00",
  },
  {
    id: 204,
    nombre: "Nike Air Force 1 107 REC 6",
    marca: "NIKE",
    categoria: "mujer",
    coleccion: "select",
    precio: "S/439.00",
    tallas: ["36", "36.5", "37.5", "38", "38.5", "39", "40"],
    imagen: "/images/air-force-1-107-rec-6-mujer.jpg",
    otrasTiendas: "S/549.00",
  },
  {
    id: 205,
    nombre: "Adidas Advantage Base 2.0",
    marca: "ADIDAS",
    categoria: "mujer",
    coleccion: "core",
    precio: "S/174.90",
    tallas: ["36.5", "37.5", "38", "39.5", "40.5"],
    imagen: "/images/adidas-advantage-base-2-0-mujer.jpg",
    otrasTiendas: "S/199.00",
  },
  {
    id: 206,
    nombre: "Adidas Barreda",
    marca: "ADIDAS",
    categoria: "mujer",
    coleccion: "select",
    precio: "S/229.00",
    tallas: ["36", "36.5", "37.5", "38", "38.5"],
    imagen: "/images/adidas-barreda-mujer.jpg",
    otrasTiendas: "S/249.00",
  },
  {
    id: 207,
    nombre: "Adidas Dropset Control Trainer",
    marca: "ADIDAS",
    categoria: "mujer",
    coleccion: "presence",
    precio: "S/285.90",
    tallas: ["36", "36.5"],
    imagen: "/images/adidas-dropset-control-trainer-mujer.jpg",
    otrasTiendas: "S/299.00",
  },
  {
    id: 208,
    nombre: "Adidas Response 2W",
    marca: "ADIDAS",
    categoria: "mujer",
    coleccion: "presence",
    precio: "S/246.00",
    tallas: ["36", "36.5" , "37.5", "38" , "38.5"],
    imagen: "/images/adidas-terrex-skychaser-ax5-gtx-w-mujer.jpg",
    otrasTiendas: "S/259.00",
  },
  {
    id: 209,
    nombre: "Adidas Court 24",
    marca: "ADIDAS",
    categoria: "mujer",
    coleccion: "select",
    precio: "S/275.00",
    tallas: ["36", "36.5", "37.5", "38", "38.5"],
    imagen: "/images/adidas-court-24-mujer.jpg",
    otrasTiendas: "S/299.00",
  },
  {
    id: 210,
    nombre: "Adidas Dropset 4 Trainer",
    marca: "ADIDAS",
    categoria: "mujer",
    coleccion: "presence",
    precio: "S/449.90",
    tallas: ["36", "36.5", "37.5", "36", "38"],
    imagen: "/images/adidas-terrex-tracefinder-2-w-mujer.jpg",
    otrasTiendas: "S/499.00",
  },
  {
    id: 211,
    nombre: "Adidas Dropset 4 Trainer",
    marca: "ADIDAS",
    categoria: "mujer",
    coleccion: "presence",
    precio: "S/449.90",
    tallas: ["36", "36.5", "37.5", "36", "38"],
    imagen: "/images/adidas-runblaze-w-mujer.jpg",
    otrasTiendas: "S/499.00",
  },
  {
    id: 212,
    nombre: "Adidas Dropset Control Trainer",
    marca: "ADIDAS",
    categoria: "mujer",
    coleccion: "core",
    precio: "S/285.90",
    tallas: ["36", "36.5" , "37.5", "38", "38.5"],
    imagen: "/images/adidas-runfalcon-5w-mujer.jpg",
    otrasTiendas: "S/299.00",
  },
  {
    id: 213,
    nombre: "Adidas Dropset Control Trainer",
    marca: "ADIDAS",
    categoria: "mujer",
    coleccion: "core",
    precio: "S/282.90",
    tallas: ["36", "36.5", "37.5", "38", "38.5"],
    imagen: "/images/adidas-galaxy-7-mujer.jpg",
    otrasTiendas: "S/299.00",
  },
];

const colecciones = [
  {
    id: "core",
    nombre: "CASTL CORE",
    subtitulo: "La base de una buena presencia",
    descripcion:
      "La base de una buena presencia. Modelos versátiles, limpios y seguros para empezar bien.",
  },
  {
    id: "select",
    nombre: "CASTL SELECT",
    subtitulo: "Para quienes saben elegir",
    descripcion:
      "Pares seleccionados para quienes buscan una percepción más elevada.",
  },
  {
    id: "street",
    nombre: "CASTL STREET",
    subtitulo: "Actitud con criterio",
    descripcion: "Una línea con carácter, energía y presencia urbana.",
  },
  {
    id: "presence",
    nombre: "CASTL PRESENCE",
    subtitulo: "Lo que más proyecta",
    descripcion: "La colección pensada para proyectar más.",
  },
] as const;

const beneficios = [
  {
    titulo: "Modelos por pedido",
    texto: "Selección cuidada para comprar con intención, no por impulso.",
    icono: ShoppingBag,
  },
  {
    titulo: "Atención por WhatsApp",
    texto: "Respuesta directa para resolver tu consulta y coordinar tu pedido.",
    icono: MessageCircle,
  },
  {
    titulo: "Guía de talla",
    texto: "Te orientamos para elegir mejor antes de confirmar tu compra.",
    icono: Ruler,
  },
  {
    titulo: "Envíos Lima y provincia",
    texto: "Entrega coordinada con claridad y seguimiento de pedido.",
    icono: Truck,
  },
  {
    titulo: "Compra con criterio",
    texto: "Un espacio sobrio, confiable y enfocado en buena elección.",
    icono: ShieldCheck,
  },
];

const pasosCompra = [
  "Elige tu colección",
  "Selecciona tu modelo",
  "Escríbenos por WhatsApp",
  "Confirma talla y pedido",
  "Coordina entrega o envío",
];

const stylistInitialState: StylistState = {
  estilo: "",
  ocasion: "",
  colorPreferido: "",
  presupuesto: "",
  fotoUsuario: null,
  fotoPantalon: null,
  fotoPolo: null,
};

const comunidadInitialState: ComunidadFormState = {
  nombreCompleto: "",
  telefono: "",
  correo: "",
  distrito: "",
  tallaUsual: "",
  marcasQueUsa: "",
  estiloPreferido: "",
  tipoDeUso: "",
  direccionFrecuente: "",
  referenciaEntrega: "",
  dniOpcional: "",
  consentimiento: false,
};

function scrollToId(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function getDescripcionColeccion(coleccion: Producto["coleccion"]) {
  switch (coleccion) {
    case "core":
      return "Un modelo versátil, limpio y seguro para construir una presencia sólida desde el primer paso.";
    case "select":
      return "Una elección pensada para quienes buscan una percepción más refinada, sobria y elevada.";
    case "street":
      return "Un par con energía, actitud y carácter para una presencia urbana con criterio.";
    case "presence":
      return "Diseñado para proyectar más, elevar la percepción y reforzar una presencia que se nota.";
    default:
      return "";
  }
}

function getNombreColeccion(coleccion: Producto["coleccion"]) {
  switch (coleccion) {
    case "core":
      return "CASTL CORE";
    case "select":
      return "CASTL SELECT";
    case "street":
      return "CASTL STREET";
    case "presence":
      return "CASTL PRESENCE";
    default:
      return "CASTL";
  }
}

function getColeccionEnfoque(coleccion: Producto["coleccion"]) {
  switch (coleccion) {
    case "core":
      return "Versátil · Limpia · Segura";
    case "select":
      return "Curada · Elevada · Premium";
    case "street":
      return "Carácter · Energía · Urbana";
    case "presence":
      return "Impacto · Proyección · Fuerza";
    default:
      return "CASTL";
  }
}

function getWhatsappUrl(mensaje: string) {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
}

function getGuiaTallaMarca(producto: Producto) {
  if (producto.marca === "ADIDAS") return "Guía de tallas Adidas";
  if (producto.marca === "JORDAN") return "Guía de tallas Jordan";
  return "Guía de tallas Nike";
}

function getGuiaTallasRows(producto: Producto) {
  if (producto.marca === "ADIDAS") {
    return [
      ["6", "6.5", "38", "38.5", "24"],
      ["6.5", "7", "38.5", "39", "24.5"],
      ["7", "7.5", "39", "40", "25"],
      ["7.5", "8", "40", "40.5", "25.5"],
      ["8", "8.5", "40.5", "41", "26"],
      ["8.5", "9", "41", "42", "26.5"],
      ["9", "9.5", "42", "42.5", "27"],
      ["9.5", "10", "42.5", "43", "27.5"],
      ["10", "10.5", "43", "44", "28"],
      ["10.5", "11", "44", "44.5", "28.5"],
      ["11", "11.5", "44.5", "45", "29"],
      ["11.5", "12", "45", "46", "29.5"],
    ];
  }

  return [
    ["5.5", "7", "37", "38", "24"],
    ["6", "7.5", "37.5", "38.5", "24"],
    ["6.5", "8", "38", "39", "24.5"],
    ["7", "8.5", "39", "40", "25"],
    ["7.5", "9", "40", "40.5", "25.5"],
    ["8", "9.5", "40.5", "41", "26"],
    ["8.5", "10", "41", "42", "26.5"],
    ["9", "10.5", "41.5", "42.5", "27"],
    ["9.5", "11", "42", "43", "27.5"],
    ["10", "11.5", "43", "44", "28"],
    ["10.5", "12", "43.5", "44.5", "28.5"],
    ["11", "12.5", "44", "45", "29"],
  ];
}

function getStockText() {
  return "Disponible";
}

function getAhorroTexto(precio: string, retail?: string) {
  if (!retail) return "Precio competitivo";
  const p = Number(precio.replace(/[^\d.]/g, ""));
  const r = Number(retail.replace(/[^\d.]/g, ""));
  if (!p || !r || r <= p) return "Precio competitivo";
  return `Ahorras S/${(r - p).toFixed(2)}`;
}

async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function getStylistRecommendation(
  producto: Producto | null,
  state: StylistState
): StylistRecommendation {
  let coleccion: Producto["coleccion"] = producto?.coleccion || "core";

  if (state.estilo === "limpio" || state.estilo === "diario") {
    coleccion = "core";
  }

  if (state.estilo === "urbano" || state.estilo === "fuerte") {
    coleccion = "street";
  }

  if (state.ocasion === "trabajo informal") {
    coleccion = "select";
  }

  if (state.ocasion === "contenido") {
    coleccion = "presence";
  }

  if (state.estilo === "deportivo" && producto?.marca === "NIKE") {
    coleccion = "presence";
  }

  const map: Record<
    Producto["coleccion"],
    { descriptor: string; razon: string; recomendacion: string }
  > = {
    core: {
      descriptor: "Base limpia y segura",
      razon:
        "Tu selección se alinea mejor con una lectura versátil, fácil de combinar y sobria.",
      recomendacion:
        "Ideal si quieres verte bien resuelto sin complicar demasiado el look.",
    },
    select: {
      descriptor: "Percepción más elevada",
      razon:
        "Tu ocasión y estilo apuntan a una presencia más curada, pulida y con mejor lectura visual.",
      recomendacion:
        "Funciona mejor para elevar el outfit sin perder sobriedad.",
    },
    street: {
      descriptor: "Carácter urbano claro",
      razon:
        "Tu perfil transmite más fuerza visual, actitud y energía de calle bien llevada.",
      recomendacion:
        "Conviene si quieres que la zapatilla tenga más protagonismo en el look.",
    },
    presence: {
      descriptor: "Impacto con intención",
      razon:
        "Tu combinación apunta a una presencia más fuerte, visible y pensada para proyectar.",
      recomendacion:
        "Buena opción si quieres un look que se note más en foto, salida o contenido.",
    },
  };

  return {
    coleccion,
    coleccionNombre: getNombreColeccion(coleccion),
    descriptor: map[coleccion].descriptor,
    razon: map[coleccion].razon,
    recomendacion: map[coleccion].recomendacion,
  };
}

function buildStylistWhatsappMessage(
  producto: Producto | null,
  state: StylistState,
  recommendation: StylistRecommendation
) {
  return [
    "Hola, quiero enviar este look desde CASTL STYLIST.",
    "",
    `Producto: ${producto ? producto.nombre : "Aún no definido"}`,
    `Colección sugerida: ${recommendation.coleccionNombre}`,
    `Descriptor: ${recommendation.descriptor}`,
    `Estilo: ${state.estilo || "No indicado"}`,
    `Ocasión: ${state.ocasion || "No indicada"}`,
    state.colorPreferido ? `Color preferido: ${state.colorPreferido}` : "",
    state.presupuesto ? `Presupuesto: ${state.presupuesto}` : "",
    "",
    "Quiero más información y ayuda para cerrar la compra.",
  ]
    .filter(Boolean)
    .join("\n");
}

function ProductoCard({
  producto,
  onOpen,
}: {
  producto: Producto;
  onOpen: (producto: Producto) => void;
}) {
  return (
    <button
      onClick={() => onOpen(producto)}
      className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] text-left transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
    >
      <div className="relative h-[290px] w-full shrink-0 overflow-hidden">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="absolute inset-0 h-full w-full object-cover object-[center_42%] transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex min-h-[245px] flex-1 flex-col justify-between p-5">
        <div className="space-y-4">
          <div className="min-h-[58px]">
            <h3 className="text-lg font-semibold leading-7 text-white">
              {producto.nombre}
            </h3>
          </div>

          <div className="min-h-[92px] space-y-1">
            <p className="text-base font-medium text-white">{producto.precio}</p>
            {producto.otrasTiendas ? (
              <p className="text-sm text-white/55">
                Precio Retail:{" "}
                <span className="font-medium text-white/80">
                  {producto.otrasTiendas}
                </span>
              </p>
            ) : (
              <div className="h-[20px]" />
            )}
            <p className="min-h-[44px] text-sm leading-6 text-white/60">
              Tallas: {producto.tallas.join(" / ")}
            </p>
          </div>
        </div>

        <div className="pt-2">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-white/85">
            Ver detalle
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </button>
  );
}

function ProductoCardColeccion({
  producto,
  onOpen,
}: {
  producto: Producto;
  onOpen: (producto: Producto) => void;
}) {
  return (
    <button
      onClick={() => onOpen(producto)}
      className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] text-left transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
    >
      <div className="relative h-[260px] w-full shrink-0 overflow-hidden border-b border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.09),transparent_58%)]" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/18 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center px-2 py-2 sm:px-3 sm:py-3">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="h-full w-full scale-[1.14] object-contain object-center transition duration-500 group-hover:scale-[1.2]"
          />
        </div>
      </div>

      <div className="flex min-h-[235px] flex-1 flex-col justify-between p-5">
        <div className="space-y-4">
          <div className="min-h-[74px]">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
              {producto.categoria === "hombre" ? "Hombre" : "Mujer"}
            </p>
            <h3 className="mt-2 min-h-[52px] text-lg font-semibold leading-7 text-white">
              {producto.nombre}
            </h3>
          </div>

          <div className="min-h-[92px] space-y-1">
            <p className="text-base font-medium text-white">{producto.precio}</p>
            {producto.otrasTiendas ? (
              <p className="text-sm text-white/55">
                Precio Retail:{" "}
                <span className="font-medium text-white/80">
                  {producto.otrasTiendas}
                </span>
              </p>
            ) : (
              <div className="h-[20px]" />
            )}
            <p className="min-h-[44px] text-sm leading-6 text-white/60">
              Tallas: {producto.tallas.join(" / ")}
            </p>
          </div>
        </div>

        <div className="pt-2">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-white/85">
            Ver detalle
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </button>
  );
}

function TablaGuia({ producto }: { producto: Producto }) {
  const rows = getGuiaTallasRows(producto);

  return (
    <div className="rounded-[22px] border border-black/10 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h4 className="text-xl font-bold leading-tight text-black sm:text-2xl">
          {getGuiaTallaMarca(producto)}
        </h4>
        <span className="rounded-full bg-black px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
          Referencia
        </span>
      </div>

      <div className="overflow-hidden rounded-[18px] border border-black/10">
        <div className="grid grid-cols-5 bg-black px-3 py-3 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-white sm:px-4">
          <div>US H</div>
          <div>US M</div>
          <div>PE</div>
          <div>EU</div>
          <div>CM</div>
        </div>

        <div className="max-h-[250px] overflow-y-auto bg-white">
          {rows.map((row, index) => (
            <div
              key={`${row.join("-")}-${index}`}
              className="grid grid-cols-5 border-t border-black/10 px-3 py-3 text-center text-sm text-black/80 sm:px-4"
            >
              <div>{row[0]}</div>
              <div>{row[1]}</div>
              <div>{row[2]}</div>
              <div>{row[3]}</div>
              <div>{row[4]}</div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-black/55">
        Esta tabla es una referencia visual para orientar la elección de talla.
        Si estás entre dos medidas, escríbenos por WhatsApp y te ayudamos a
        elegir mejor.
      </p>
    </div>
  );
}

function ModalProducto({
  producto,
  onClose,
}: {
  producto: Producto | null;
  onClose: () => void;
}) {
  const [mostrarGuia, setMostrarGuia] = useState(false);

  useEffect(() => {
    if (!producto) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [producto, onClose]);

  useEffect(() => {
    setMostrarGuia(false);
  }, [producto]);

  if (!producto) return null;

  const mensaje = `Hola, quiero consultar por el modelo ${producto.nombre} de la colección ${getNombreColeccion(producto.coleccion)}.`;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-6">
      <div className="relative h-[90vh] w-full max-w-6xl overflow-hidden rounded-[30px] border border-white/10 bg-[#f3f3f3] shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-md transition hover:scale-[1.03]"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid h-full lg:grid-cols-[1.32fr_0.88fr]">
          <div className="flex items-center justify-center overflow-hidden bg-[#efefef] p-5 sm:p-8 lg:p-10">
            <div className="flex h-full w-full items-center justify-center rounded-[24px] bg-[#e9e9e9] p-4 sm:p-6">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="max-h-full max-w-full rounded-[18px] object-contain"
              />
            </div>
          </div>

          <div className="h-full overflow-y-auto border-l border-black/10 bg-[#f7f7f7]">
            <div className="flex min-h-full flex-col px-5 py-6 sm:px-6 lg:px-6">
              <div className="space-y-5">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-black/35">
                    {producto.marca}
                  </p>
                  <h3 className="mt-2 text-3xl font-bold leading-tight text-black">
                    {producto.nombre}
                  </h3>
                  <p className="mt-2 text-base text-black/55">
                    {producto.categoria === "hombre" ? "Hombre" : "Mujer"}
                  </p>
                </div>

                <div className="border-b border-black/10 pb-5">
                  <p className="text-[42px] font-extrabold leading-none tracking-[-0.03em] text-black">
                    {producto.precio.replace("S/ ", "S/")}
                  </p>

                  {producto.otrasTiendas && (
                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                      <p className="text-base font-bold uppercase text-red-600">
                        Precio Retail:{" "}
                        {producto.otrasTiendas.replace("S/ ", "S/")}
                      </p>
                      <span className="rounded-full border border-black/10 bg-black/[0.04] px-3 py-1 text-xs font-semibold text-black/70">
                        {getAhorroTexto(producto.precio, producto.otrasTiendas)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="rounded-[24px] border border-black/10 bg-white p-4 shadow-[0_8px_25px_rgba(0,0,0,0.04)]">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-lg font-semibold text-black">
                        Selecciona tu talla
                      </p>
                      <p className="mt-3 text-base leading-7 text-black/60">
                        {producto.tallas.join(" • ")}
                      </p>
                    </div>

                    <button
                      onClick={() => setMostrarGuia((prev) => !prev)}
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-black/70 px-5 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
                    >
                      Guía de tallas
                      <ChevronDown
                        className={`h-4 w-4 transition ${mostrarGuia ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mostrarGuia
                        ? "mt-5 max-h-[420px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <TablaGuia producto={producto} />
                  </div>
                </div>

                <div className="rounded-[24px] border border-black/10 bg-white p-4 shadow-[0_8px_25px_rgba(0,0,0,0.04)]">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-black px-3 py-1 text-sm font-semibold text-white">
                      {getStockText()}
                    </span>
                    <span className="text-sm text-black/45">
                      Consulta disponibilidad real por WhatsApp.
                    </span>
                  </div>

                  <div className="mt-4 space-y-2 border-t border-black/10 pt-4 text-sm leading-6 text-black/65">
                    <p>
                      <span className="font-semibold text-black">
                        Entrega estimada:
                      </span>{" "}
                      Lima en 24 horas. 48 horas si pides después de las 6 PM.
                    </p>
                    <p>
                      <span className="font-semibold text-black">
                        Envíos a provincia:
                      </span>{" "}
                      entre 48 a 72 horas.
                    </p>
                    <p>
                      <span className="font-semibold text-black">
                        Métodos de pago:
                      </span>{" "}
                      Yape, Plin o transferencia bancaria.
                    </p>
                  </div>
                </div>

                <a
                  href={getWhatsappUrl(mensaje)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-4 text-base font-bold text-white transition hover:opacity-90"
                >
                  Consultar por WhatsApp
                </a>

                <div className="rounded-[24px] border border-black/10 bg-white p-4 shadow-[0_8px_25px_rgba(0,0,0,0.04)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-black/35">
                    {getNombreColeccion(producto.coleccion)}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-black/65">
                    {getDescripcionColeccion(producto.coleccion)}
                  </p>
                </div>
              </div>

              <div className="mt-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StylistStepQuiz({
  state,
  onChange,
}: {
  state: StylistState;
  onChange: (partial: Partial<StylistState>) => void;
}) {
  const estiloOptions: StylistState["estilo"][] = [
    "limpio",
    "urbano",
    "diario",
    "fuerte",
    "deportivo",
  ];

  const ocasionOptions: StylistState["ocasion"][] = [
    "salida",
    "diario",
    "universidad",
    "trabajo informal",
    "contenido",
  ];

  return (
    <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5">
      <div className="mb-5">
        <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
          Paso 1
        </p>
        <h3 className="mt-2 text-xl font-semibold text-white">
          Define tu estilo
        </h3>
      </div>

      <div className="space-y-5">
        <div>
          <p className="mb-3 text-sm font-medium text-white/82">Estilo</p>
          <div className="flex flex-wrap gap-2">
            {estiloOptions.map((option) => (
              <button
                key={option}
                onClick={() => onChange({ estilo: option })}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  state.estilo === option
                    ? "bg-white text-black"
                    : "border border-white/12 bg-white/[0.03] text-white/78 hover:bg-white/[0.08]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium text-white/82">Ocasión</p>
          <div className="flex flex-wrap gap-2">
            {ocasionOptions.map((option) => (
              <button
                key={option}
                onClick={() => onChange({ ocasion: option })}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  state.ocasion === option
                    ? "bg-white text-black"
                    : "border border-white/12 bg-white/[0.03] text-white/78 hover:bg-white/[0.08]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-white/82">
              Color preferido
            </label>
            <input
              value={state.colorPreferido}
              onChange={(e) => onChange({ colorPreferido: e.target.value })}
              placeholder="Ej. negro, blanco, beige"
              className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white/82">
              Presupuesto
            </label>
            <input
              value={state.presupuesto}
              onChange={(e) => onChange({ presupuesto: e.target.value })}
              placeholder="Ej. S/200 - S/350"
              className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StylistUploadCard({
  title,
  subtitle,
  icon,
  preview,
  onFile,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  preview: string | null;
  onFile: (file: File) => void;
}) {
  return (
    <label className="group block cursor-pointer rounded-[24px] border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/18 hover:bg-white/[0.05]">
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onFile(file);
        }}
      />

      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80">
          {icon}
        </div>

        <div className="flex-1">
          <h4 className="text-sm font-semibold text-white">{title}</h4>
          <p className="mt-1 text-xs leading-6 text-white/48">{subtitle}</p>
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-[18px] border border-white/8 bg-black/25">
        {preview ? (
          <img
            src={preview}
            alt={title}
            className="h-40 w-full object-cover"
          />
        ) : (
          <div className="flex h-40 items-center justify-center text-center text-sm text-white/38">
            Subir imagen
          </div>
        )}
      </div>
    </label>
  );
}

function StylistStepUploads({
  state,
  onChange,
}: {
  state: StylistState;
  onChange: (partial: Partial<StylistState>) => void;
}) {
  const handleFile =
    (key: "fotoUsuario" | "fotoPantalon" | "fotoPolo") =>
    async (file: File) => {
      const base64 = await fileToBase64(file);
      onChange({ [key]: base64 } as Partial<StylistState>);
    };

  return (
    <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5">
      <div className="mb-5">
        <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
          Paso 2
        </p>
        <h3 className="mt-2 text-xl font-semibold text-white">
          Sube tus referencias
        </h3>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <StylistUploadCard
          title="Tu foto"
          subtitle="Obligatoria para la composición principal del look."
          icon={<User className="h-5 w-5" />}
          preview={state.fotoUsuario}
          onFile={handleFile("fotoUsuario")}
        />
        <StylistUploadCard
          title="Pantalón"
          subtitle="Opcional. Sube una referencia si quieres una composición más completa."
          icon={<Shirt className="h-5 w-5" />}
          preview={state.fotoPantalon}
          onFile={handleFile("fotoPantalon")}
        />
        <StylistUploadCard
          title="Polo o polera"
          subtitle="Opcional. Ayuda a construir una lectura visual más precisa."
          icon={<Camera className="h-5 w-5" />}
          preview={state.fotoPolo}
          onFile={handleFile("fotoPolo")}
        />
      </div>
    </div>
  );
}

function StylistPreviewCanvas({
  producto,
  state,
  recommendation,
}: {
  producto: Producto | null;
  state: StylistState;
  recommendation: StylistRecommendation;
}) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-white/42">
            Preview
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            Styling preview
          </h3>
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/72">
          CASTL STYLIST
        </span>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_0.42fr]">
        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0b0b0d]">
          <div className="aspect-[4/5] w-full">
            {state.fotoUsuario ? (
              <img
                src={state.fotoUsuario}
                alt="Preview usuario"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-center text-sm text-white/35">
                Sube tu foto para ver la composición principal
              </div>
            )}
          </div>

          {producto && (
            <div className="absolute bottom-3 right-3 w-[34%] max-w-[180px] overflow-hidden rounded-[18px] border border-white/12 bg-white p-2 shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
              <div className="aspect-square w-full">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          )}

          <div className="absolute left-3 top-3 rounded-full border border-white/12 bg-black/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
            {recommendation.coleccionNombre}
          </div>
        </div>

        <div className="space-y-4">
          <div className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03]">
            <div className="border-b border-white/10 px-4 py-3 text-[11px] uppercase tracking-[0.2em] text-white/42">
              Pantalón
            </div>
            {state.fotoPantalon ? (
              <img
                src={state.fotoPantalon}
                alt="Pantalón"
                className="h-48 w-full object-cover"
              />
            ) : (
              <div className="flex h-48 items-center justify-center text-sm text-white/32">
                Sin referencia subida
              </div>
            )}
          </div>

          <div className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03]">
            <div className="border-b border-white/10 px-4 py-3 text-[11px] uppercase tracking-[0.2em] text-white/42">
              Polo / Polera
            </div>
            {state.fotoPolo ? (
              <img
                src={state.fotoPolo}
                alt="Polo o polera"
                className="h-48 w-full object-cover"
              />
            ) : (
              <div className="flex h-48 items-center justify-center text-sm text-white/32">
                Sin referencia subida
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function StylistRecommendationPanel({
  producto,
  recommendation,
}: {
  producto: Producto | null;
  recommendation: StylistRecommendation;
}) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5">
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
          <Sparkles className="h-5 w-5 text-white/78" />
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/42">
            Recomendación
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            {recommendation.coleccionNombre}
          </h3>
        </div>
      </div>

      <div className="space-y-3 text-sm leading-7 text-white/68">
        <p>
          <span className="font-semibold text-white">Descriptor:</span>{" "}
          {recommendation.descriptor}
        </p>
        <p>
          <span className="font-semibold text-white">Razón:</span>{" "}
          {recommendation.razon}
        </p>
        <p>
          <span className="font-semibold text-white">Recomendación:</span>{" "}
          {recommendation.recomendacion}
        </p>
        {producto && (
          <p>
            <span className="font-semibold text-white">Modelo elegido:</span>{" "}
            {producto.nombre}
          </p>
        )}
      </div>
    </div>
  );
}

function StylistWhatsAppCTA({
  producto,
  state,
  recommendation,
}: {
  producto: Producto | null;
  state: StylistState;
  recommendation: StylistRecommendation;
}) {
  const mensaje = buildStylistWhatsappMessage(producto, state, recommendation);

  return (
    <a
      href={getWhatsappUrl(mensaje)}
      target="_blank"
      rel="noreferrer"
      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:opacity-90"
    >
      Enviar este look a WhatsApp
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function CastlStylistModal({
  isOpen,
  onClose,
  productosDisponibles,
  productoInicial = null,
}: {
  isOpen: boolean;
  onClose: () => void;
  productosDisponibles: Producto[];
  productoInicial?: Producto | null;
}) {
  const [selectedProductId, setSelectedProductId] = useState<number | "">("");
  const [state, setState] = useState<StylistState>(stylistInitialState);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    setSelectedProductId(productoInicial?.id ?? "");
    setState(stylistInitialState);
  }, [isOpen, productoInicial]);

  const productoSeleccionado =
    productosDisponibles.find((item) => item.id === selectedProductId) || null;

  const recommendation = getStylistRecommendation(productoSeleccionado, state);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] bg-black/80 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-6">
      <div className="relative mx-auto h-[92vh] w-full max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-[#070709] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-black/45 text-white transition hover:bg-white/10"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="h-full overflow-y-auto">
          <div className="border-b border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-5 py-6 sm:px-7">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/42">
              CASTL STYLIST
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Arma tu look antes de escribirnos
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/62 sm:text-base">
              Elige un modelo, sube tu foto y descubre una vista previa de
              estilo antes de consultar por WhatsApp.
            </p>
          </div>

          <div className="grid gap-6 px-5 py-6 sm:px-7 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                    Paso 0
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    Elige una zapatilla
                  </h3>
                </div>

                <select
                  value={selectedProductId}
                  onChange={(e) =>
                    setSelectedProductId(
                      e.target.value ? Number(e.target.value) : ""
                    )
                  }
                  className="w-full rounded-2xl border border-white/10 bg-[#0a0a0c] px-4 py-3 text-sm text-white outline-none"
                >
                  <option value="">Selecciona un modelo</option>
                  {productosDisponibles.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.nombre} — {item.precio}
                    </option>
                  ))}
                </select>

                {productoSeleccionado && (
                  <div className="mt-5 flex items-center gap-4 rounded-[22px] border border-white/10 bg-black/25 p-4">
                    <div className="h-20 w-20 overflow-hidden rounded-[16px] bg-white p-2">
                      <img
                        src={productoSeleccionado.imagen}
                        alt={productoSeleccionado.nombre}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.22em] text-white/42">
                        {productoSeleccionado.marca}
                      </p>
                      <h4 className="mt-2 text-base font-semibold text-white">
                        {productoSeleccionado.nombre}
                      </h4>
                      <p className="mt-1 text-sm text-white/58">
                        {productoSeleccionado.precio}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <StylistStepQuiz
                state={state}
                onChange={(partial) =>
                  setState((prev) => ({ ...prev, ...partial }))
                }
              />

              <StylistStepUploads
                state={state}
                onChange={(partial) =>
                  setState((prev) => ({ ...prev, ...partial }))
                }
              />
            </div>

            <div className="space-y-6">
              <StylistPreviewCanvas
                producto={productoSeleccionado}
                state={state}
                recommendation={recommendation}
              />

              <StylistRecommendationPanel
                producto={productoSeleccionado}
                recommendation={recommendation}
              />

              <StylistWhatsAppCTA
                producto={productoSeleccionado}
                state={state}
                recommendation={recommendation}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CastlStylistSection({
  onOpen,
}: {
  onOpen: () => void;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.34em] text-white/45">
              CASTL STYLIST
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl lg:text-5xl">
              Arma tu look antes de escribirnos
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/64 sm:text-base">
              Elige un modelo, sube tu foto y descubre una vista previa de
              estilo antes de consultar por WhatsApp.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={onOpen}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Probar CASTL STYLIST
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => scrollToId("stylist-como-funciona")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Cómo funciona
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                <ShoppingBag className="h-5 w-5 text-white/82" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                Elige tu modelo
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/58">
                Selecciona la zapatilla dentro del mismo flujo, sin depender del
                catálogo.
              </p>
            </div>

            <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                <Upload className="h-5 w-5 text-white/82" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                Sube tu referencia
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/58">
                Tu foto y, si quieres, referencias de pantalón y polo o polera.
              </p>
            </div>

            <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                <Sparkles className="h-5 w-5 text-white/82" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                Recibe tu preview
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/58">
                Mira una composición premium del look y envíala directo a
                WhatsApp.
              </p>
            </div>
          </div>
        </div>

        <div
          id="stylist-como-funciona"
          className="border-t border-white/10 px-6 py-6 sm:px-8 lg:px-10"
        >
          <div className="grid gap-4 md:grid-cols-4">
            {[
              "Elige una zapatilla",
              "Responde preguntas rápidas",
              "Sube tus imágenes",
              "Revisa la recomendación y escríbenos",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-[22px] border border-white/10 bg-black/20 p-4"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="mt-4 text-sm leading-7 text-white/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ComunidadCastelSection({
  onOpen,
}: {
  onOpen: () => void;
}) {
  const benefits = [
    {
      title: "Canal privado de WhatsApp",
      text: "Acceso directo a una capa más reservada del ecosistema CASTL.",
      icon: MessageCircle,
    },
    {
      title: "Compras más fluidas",
      text: "Tus datos quedan listos para una atención futura más simple y rápida.",
      icon: BadgeCheck,
    },
    {
      title: "Relación más directa",
      text: "Una conexión más ordenada, cercana y prioritaria con la marca.",
      icon: Users,
    },
    {
      title: "Experiencia prioritaria",
      text: "Un acceso pensado para quienes quieren moverse dentro de CASTL con más criterio.",
      icon: Crown,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))]">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.02fr_0.98fr] lg:p-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75">
              <Lock className="h-3.5 w-3.5" />
              Acceso privado
            </div>

            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl lg:text-5xl">
              COMUNIDAD CASTEL
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/64 sm:text-base">
              Únete a COMUNIDAD CASTEL y activa una experiencia más fluida,
              directa y reservada dentro de la marca.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={onOpen}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Unirme a COMUNIDAD CASTEL
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => scrollToId("comunidad-castel-beneficios")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Ver beneficios
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div
            id="comunidad-castel-beneficios"
            className="grid gap-4 md:grid-cols-2"
          >
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-white/82" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/58">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ComunidadCastelStepIndicator({
  step,
}: {
  step: 1 | 2 | 3;
}) {
  const labels = ["Datos base", "Preferencias", "Compra futura"] as const;

  return (
    <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[11px] uppercase tracking-[0.22em] text-white/42">
          Paso {step} de 3
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {labels.map((label, index) => {
          const current = index + 1;
          const active = step === current;
          const done = step > current;

          return (
            <div
              key={label}
              className={`rounded-[18px] border px-4 py-3 text-sm transition ${
                active
                  ? "border-white/18 bg-white/[0.08] text-white"
                  : "border-white/8 bg-white/[0.02] text-white/56"
              }`}
            >
              <div className="mb-2 flex items-center gap-2">
                {done ? (
                  <Check className="h-4 w-4 text-white" />
                ) : active ? (
                  <Circle className="h-4 w-4 fill-white text-white" />
                ) : (
                  <Circle className="h-4 w-4 text-white/35" />
                )}
                <span className="font-medium">{label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ComunidadField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  icon,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-white/82">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/34">
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-white/28 ${
            icon ? "pl-11" : ""
          }`}
        />
      </div>
    </div>
  );
}

function ComunidadCastelForm({
  step,
  form,
  setForm,
}: {
  step: 1 | 2 | 3;
  form: ComunidadFormState;
  setForm: React.Dispatch<React.SetStateAction<ComunidadFormState>>;
}) {
  if (step === 1) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <ComunidadField
          label="Nombre completo"
          value={form.nombreCompleto}
          onChange={(value) =>
            setForm((prev) => ({ ...prev, nombreCompleto: value }))
          }
          placeholder="Tu nombre completo"
          icon={<User className="h-4 w-4" />}
        />
        <ComunidadField
          label="Teléfono"
          value={form.telefono}
          onChange={(value) => setForm((prev) => ({ ...prev, telefono: value }))}
          placeholder="Número de contacto"
          icon={<Phone className="h-4 w-4" />}
        />
        <ComunidadField
          label="Correo"
          value={form.correo}
          onChange={(value) => setForm((prev) => ({ ...prev, correo: value }))}
          placeholder="Correo de contacto"
          type="email"
          icon={<Mail className="h-4 w-4" />}
        />
        <ComunidadField
          label="Distrito"
          value={form.distrito}
          onChange={(value) => setForm((prev) => ({ ...prev, distrito: value }))}
          placeholder="Distrito habitual"
          icon={<MapPin className="h-4 w-4" />}
        />
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <ComunidadField
          label="Talla usual"
          value={form.tallaUsual}
          onChange={(value) => setForm((prev) => ({ ...prev, tallaUsual: value }))}
          placeholder="Ej. 40 / 41 / 38.5"
        />
        <ComunidadField
          label="Marcas que más usa"
          value={form.marcasQueUsa}
          onChange={(value) =>
            setForm((prev) => ({ ...prev, marcasQueUsa: value }))
          }
          placeholder="Ej. Nike, Adidas, Jordan"
        />
        <ComunidadField
          label="Estilo preferido"
          value={form.estiloPreferido}
          onChange={(value) =>
            setForm((prev) => ({ ...prev, estiloPreferido: value }))
          }
          placeholder="Ej. limpio, urbano, diario"
        />
        <ComunidadField
          label="Tipo de uso"
          value={form.tipoDeUso}
          onChange={(value) => setForm((prev) => ({ ...prev, tipoDeUso: value }))}
          placeholder="Ej. diario, salida, contenido"
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <ComunidadField
          label="Dirección frecuente"
          value={form.direccionFrecuente}
          onChange={(value) =>
            setForm((prev) => ({ ...prev, direccionFrecuente: value }))
          }
          placeholder="Dirección usual de entrega"
        />
        <ComunidadField
          label="Referencia de entrega"
          value={form.referenciaEntrega}
          onChange={(value) =>
            setForm((prev) => ({ ...prev, referenciaEntrega: value }))
          }
          placeholder="Punto de referencia"
        />
      </div>

      <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
        <div className="mb-3">
          <p className="text-sm font-medium text-white">DNI (opcional)</p>
          <p className="mt-1 text-sm leading-7 text-white/52">
            Puedes dejarlo guardado si quieres facilitar futuras boletas o
            compras, pero no es obligatorio.
          </p>
        </div>

        <ComunidadField
          label="DNI opcional"
          value={form.dniOpcional}
          onChange={(value) =>
            setForm((prev) => ({ ...prev, dniOpcional: value }))
          }
          placeholder="Solo si deseas dejarlo guardado"
        />
      </div>

      <label className="flex items-start gap-3 rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
        <input
          type="checkbox"
          checked={form.consentimiento}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, consentimiento: e.target.checked }))
          }
          className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent"
        />
        <span className="text-sm leading-7 text-white/66">
          Acepto dejar estos datos guardados para una atención futura más fluida
          dentro de COMUNIDAD CASTEL.
        </span>
      </label>
    </div>
  );
}

function ComunidadCastelSuccessState({
  onClose,
  onOpenStylist,
}: {
  onClose: () => void;
  onOpenStylist: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 text-center sm:p-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/12 bg-white/[0.06]">
          <Check className="h-7 w-7 text-white" />
        </div>

        <p className="mt-5 text-[11px] uppercase tracking-[0.26em] text-white/42">
          Acceso activado
        </p>
        <h3 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Bienvenido a COMUNIDAD CASTEL
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">
          Tu acceso ha sido activado. Ahora ya puedes entrar al canal privado de
          difusión y seguir conectado con una experiencia más reservada dentro
          de la marca.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href={COMUNIDAD_WHATSAPP_CHANNEL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Unirme al canal de WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            onClick={() => {
              onClose();
              setTimeout(() => scrollToId("explorar-categoria"), 120);
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
          >
            Explorar catálogo
          </button>

          <button
            onClick={() => {
              onClose();
              setTimeout(() => onOpenStylist(), 120);
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
          >
            Probar CASTL STYLIST
          </button>
        </div>
      </div>
    </div>
  );
}

function ComunidadCastelModal({
  isOpen,
  onClose,
  onOpenStylist,
}: {
  isOpen: boolean;
  onClose: () => void;
  onOpenStylist: () => void;
}) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState<ComunidadFormState>(comunidadInitialState);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    setStep(1);
    setSuccess(false);
    setForm(comunidadInitialState);
  }, [isOpen]);

  const canContinueStep1 =
    form.nombreCompleto.trim() &&
    form.telefono.trim() &&
    form.correo.trim() &&
    form.distrito.trim();

  const canContinueStep2 =
    form.tallaUsual.trim() &&
    form.marcasQueUsa.trim() &&
    form.estiloPreferido.trim() &&
    form.tipoDeUso.trim();

  const canFinishStep3 =
    form.direccionFrecuente.trim() &&
    form.referenciaEntrega.trim() &&
    form.consentimiento;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[130] bg-black/80 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-6">
      <div className="relative mx-auto h-[92vh] w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-[#070709] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-black/45 text-white transition hover:bg-white/10"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="h-full overflow-y-auto">
          <div className="border-b border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-5 py-6 sm:px-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75">
              <Lock className="h-3.5 w-3.5" />
              Comunidad Premium
            </div>

            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              COMUNIDAD CASTEL
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/62 sm:text-base">
              Activa un acceso más fluido, directo y reservado dentro del
              universo CASTL.
            </p>
          </div>

          <div className="px-5 py-6 sm:px-7">
            {success ? (
              <ComunidadCastelSuccessState
                onClose={onClose}
                onOpenStylist={onOpenStylist}
              />
            ) : (
              <div className="space-y-6">
                <ComunidadCastelStepIndicator step={step} />

                <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                  <ComunidadCastelForm
                    step={step}
                    form={form}
                    setForm={setForm}
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                  <button
                    onClick={() =>
                      setStep((prev) =>
                        prev > 1 ? ((prev - 1) as 1 | 2 | 3) : prev
                      )
                    }
                    disabled={step === 1}
                    className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Volver
                  </button>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    {step === 1 && (
                      <button
                        onClick={() => setStep(2)}
                        disabled={!canContinueStep1}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        Continuar
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    )}

                    {step === 2 && (
                      <button
                        onClick={() => setStep(3)}
                        disabled={!canContinueStep2}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        Continuar
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    )}

                    {step === 3 && (
                      <button
                        onClick={() => setSuccess(true)}
                        disabled={!canFinishStep3}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        Activar acceso
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Header({
  mobileOpen,
  setMobileOpen,
  onSelectCategoria,
  onGoInicio,
}: {
  mobileOpen: boolean;
  setMobileOpen: (value: boolean) => void;
  onSelectCategoria: (categoria: CategoriaFiltro) => void;
  onGoInicio: () => void;
}) {
  const menuItems = [
    { label: "Inicio", action: onGoInicio },
    { label: "Colecciones", action: () => scrollToId("colecciones") },
    {
      label: "Hombres",
      action: () => {
        onSelectCategoria("hombre");
        scrollToId("explorar-categoria");
      },
    },
    {
      label: "Mujeres",
      action: () => {
        onSelectCategoria("mujer");
        scrollToId("explorar-categoria");
      },
    },
    { label: "Cómo comprar", action: () => scrollToId("como-comprar") },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <button onClick={onGoInicio} className="text-left">
            <img
              src="/images/logo-castl.png"
              alt="CASTL"
              className="h-12 w-auto object-contain sm:h-14 md:h-16"
            />
          </button>

          <div className="hidden items-center gap-6 md:flex">
            <nav className="flex items-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2 border-l border-white/10 pl-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/78 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                IG
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/78 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                TikTok
              </a>
              <a
                href={getWhatsappUrl(WHATSAPP_MENSAJE)}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/18 bg-white px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-black transition hover:opacity-90"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-full border border-white/10 p-2 text-white/80 md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-black/75 backdrop-blur-sm md:hidden">
          <div className="ml-auto h-full w-[88%] max-w-sm border-l border-white/10 bg-[#0b0b0d] p-6">
            <div className="mb-8 flex items-center justify-between">
              <button onClick={onGoInicio}>
                <img
                  src="/images/logo-castl.png"
                  alt="CASTL"
                  className="h-12 w-auto object-contain"
                />
              </button>
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-full border border-white/10 p-2 text-white/80"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    item.action?.();
                    setMobileOpen(false);
                  }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-white/85"
                >
                  {item.label}
                </button>
              ))}

              <div className="mt-3 border-t border-white/10 pt-4">
                <p className="mb-3 text-[11px] uppercase tracking-[0.24em] text-white/38">
                  Redes oficiales
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white/85"
                  >
                    Instagram
                  </a>
                  <a
                    href={TIKTOK_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white/85"
                  >
                    TikTok
                  </a>
                  <a
                    href={getWhatsappUrl(WHATSAPP_MENSAJE)}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-white px-4 py-3 font-semibold text-black"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productoActivo, setProductoActivo] = useState<Producto | null>(null);
  const [categoriaActiva, setCategoriaActiva] =
    useState<CategoriaFiltro>("hombre");
  const [coleccionActiva, setColeccionActiva] = useState<
    Producto["coleccion"] | null
  >(null);
  const [stylistOpen, setStylistOpen] = useState(false);
  const [stylistProductoInicial, setStylistProductoInicial] =
    useState<Producto | null>(null);
  const [comunidadOpen, setComunidadOpen] = useState(false);

  const productosFiltrados = useMemo(() => {
    return productosCatalogo.filter((item) => item.categoria === categoriaActiva);
  }, [categoriaActiva]);

  const productosColeccionActiva = useMemo(() => {
    if (!coleccionActiva) return [];
    return productos.filter((item) => item.coleccion === coleccionActiva);
  }, [coleccionActiva]);

  const coleccionSeleccionada = useMemo(() => {
    if (!coleccionActiva) return null;
    return colecciones.find((item) => item.id === coleccionActiva) ?? null;
  }, [coleccionActiva]);

  const irAlInicio = () => {
    setCategoriaActiva("hombre");
    setMobileOpen(false);
    scrollToId("inicio");
  };

  const abrirColeccion = (coleccionId: Producto["coleccion"]) => {
    setColeccionActiva((prev) => (prev === coleccionId ? null : coleccionId));
    setTimeout(() => {
      scrollToId("coleccion-detalle");
    }, 120);
  };

  return (
    <main className="min-h-screen bg-[#050506] text-white">
      <Header
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        onSelectCategoria={setCategoriaActiva}
        onGoInicio={irAlInicio}
      />

      <section
        id="inicio"
        className="relative isolate min-h-[68vh] overflow-hidden border-b border-white/10 sm:min-h-[75vh] lg:min-h-[92vh]"
      >
        <img
          src="/images/hero-castl.jpg"
          alt="CASTL portada"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.50)_38%,rgba(0,0,0,0.20)_65%,rgba(0,0,0,0.35)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.30)_0%,rgba(0,0,0,0.05)_28%,rgba(0,0,0,0.34)_100%)]" />

        <div className="relative mx-auto flex min-h-[68vh] max-w-7xl items-end px-4 py-12 sm:min-h-[75vh] sm:px-6 sm:py-16 lg:min-h-[92vh] lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.34em] text-white/60">
              CASTL
            </p>

            <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-8xl">
              Presencia con criterio
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/78 sm:text-base lg:text-lg lg:leading-8">
              Selección de zapatillas para quienes saben elegir. Modelos por
              pedido, estilo con intención y una presencia que se nota.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => scrollToId("colecciones")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Ver colecciones
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href={getWhatsappUrl(WHATSAPP_MENSAJE)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Comprar por WhatsApp
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="colecciones"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.34em] text-white/45">
            Colecciones
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Las primeras colecciones oficiales de CASTL
          </h2>
          <p className="mt-5 text-base leading-8 text-white/65">
            La arquitectura principal de la marca vive aquí: cuatro líneas con
            intención distinta, una misma unidad visual y una lectura más clara
            de CASTL.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {colecciones.map((coleccion) => (
            <button
              key={coleccion.id}
              onClick={() => abrirColeccion(coleccion.id)}
              className={`group rounded-[28px] border p-6 text-left transition duration-300 hover:-translate-y-1 ${
                coleccionActiva === coleccion.id
                  ? "border-white/25 bg-white/[0.08]"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
              }`}
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">
                Colección
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                {coleccion.nombre}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                {coleccion.subtitulo}
              </p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-white/38">
                {getColeccionEnfoque(coleccion.id)}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/85">
                {coleccionActiva === coleccion.id
                  ? "Ocultar productos"
                  : "Ver productos"}
                <ArrowRight
                  className={`h-4 w-4 transition ${
                    coleccionActiva === coleccion.id
                      ? "rotate-90"
                      : "group-hover:translate-x-1"
                  }`}
                />
              </div>
            </button>
          ))}
        </div>

        {coleccionSeleccionada && (
          <div
            id="coleccion-detalle"
            className="mt-10 rounded-[32px] border border-white/10 bg-white/[0.02] p-6 sm:p-8"
          >
            <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-[11px] uppercase tracking-[0.34em] text-white/45">
                  {coleccionSeleccionada.nombre}
                </p>
                <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
                  {coleccionSeleccionada.subtitulo}
                </h3>
                <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-white/38">
                  {getColeccionEnfoque(coleccionSeleccionada.id)}
                </p>
                <p className="mt-5 text-sm leading-7 text-white/62 sm:text-base">
                  {coleccionSeleccionada.descripcion}
                </p>
              </div>

              <div className="text-sm text-white/45">
                {productosColeccionActiva.length} modelo
                {productosColeccionActiva.length !== 1 ? "s" : ""}
              </div>
            </div>

            <div className="grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {productosColeccionActiva.map((producto) => (
                <ProductoCardColeccion
                  key={`coleccion-${producto.id}`}
                  producto={producto}
                  onOpen={setProductoActivo}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      <section
        id="explorar-categoria"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="rounded-[32px] border border-white/10 bg-white/[0.02] p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.34em] text-white/45">
                Catálogo
              </p>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                Categoría
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/62 sm:text-base">
                Explora la selección disponible de CASTL según tu estilo y
                necesidad. Este catálogo organiza para ayudarte a elegir con más
                criterio.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setCategoriaActiva("hombre")}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  categoriaActiva === "hombre"
                    ? "bg-white text-black"
                    : "border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08]"
                }`}
              >
                Hombres
              </button>
              <button
                onClick={() => setCategoriaActiva("mujer")}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  categoriaActiva === "mujer"
                    ? "bg-white text-black"
                    : "border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08]"
                }`}
              >
                Mujeres
              </button>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
            <p className="text-sm text-white/52">
              Vista rápida filtrada para apoyo comercial.
            </p>
            <p className="text-sm text-white/45">
              {productosFiltrados.length} resultado
              {productosFiltrados.length !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="mt-8 grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {productosFiltrados.map((producto) => (
              <ProductoCard
                key={`catalogo-${producto.id}`}
                producto={producto}
                onOpen={setProductoActivo}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="como-comprar"
        className="border-y border-white/10 bg-white/[0.02]"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.34em] text-white/45">
              Cómo comprar
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Un proceso simple para elegir mejor
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {pasosCompra.map((paso, index) => (
              <div
                key={paso}
                className="rounded-[28px] border border-white/10 bg-[#0a0a0c] p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="mt-5 text-lg font-medium text-white">{paso}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ComunidadCastelSection onOpen={() => setComunidadOpen(true)} />

      <CastlStylistSection
        onOpen={() => {
          setStylistProductoInicial(null);
          setStylistOpen(true);
        }}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.34em] text-white/45">
            Beneficios
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Una compra más clara, más simple y más segura
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {beneficios.map((beneficio) => {
            const Icono = beneficio.icono;
            return (
              <div
                key={beneficio.titulo}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                  <Icono className="h-5 w-5 text-white/85" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {beneficio.titulo}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/62">
                  {beneficio.texto}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.02] p-6 sm:p-8 lg:p-10">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.34em] text-white/45">
              CONECTA CON CASTL
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Nuestra marca también vive en nuestras plataformas
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/62 sm:text-base">
              Descubre la marca, las colecciones y nuestra selección en nuestras
              plataformas. Para atención directa, escríbenos por WhatsApp.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <a
              href={getWhatsappUrl(WHATSAPP_MENSAJE)}
              target="_blank"
              rel="noreferrer"
              className="rounded-[28px] border border-white/18 bg-white px-6 py-6 text-black transition hover:opacity-95"
            >
              <p className="text-[11px] uppercase tracking-[0.24em] text-black/55">
                Conversión principal
              </p>
              <h3 className="mt-3 text-2xl font-semibold">WhatsApp</h3>
              <p className="mt-3 text-sm leading-7 text-black/68">
                Canal directo para consultas, atención y cierre.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                Escribir ahora
                <ArrowRight className="h-4 w-4" />
              </div>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-[28px] border border-white/10 bg-white/[0.03] px-6 py-6 transition hover:border-white/18 hover:bg-white/[0.05]"
            >
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/42">
                Marca y descubrimiento
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Instagram
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/62">
                Contenido de marca, selección visual y presencia.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/88">
                Ver perfil
                <ArrowRight className="h-4 w-4" />
              </div>
            </a>

            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-[28px] border border-white/10 bg-white/[0.03] px-6 py-6 transition hover:border-white/18 hover:bg-white/[0.05]"
            >
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/42">
                Marca y descubrimiento
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">TikTok</h3>
              <p className="mt-3 text-sm leading-7 text-white/62">
                Movimiento, estilo y contenido para ampliar el universo CASTL.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/88">
                Ver perfil
                <ArrowRight className="h-4 w-4" />
              </div>
            </a>

            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-[28px] border border-white/8 bg-white/[0.02] px-6 py-6 transition hover:border-white/14 hover:bg-white/[0.04]"
            >
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                Respaldo de presencia
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white/92">
                Facebook
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/56">
                Canal secundario de respaldo, validación y presencia digital.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/78">
                Ver página
                <ArrowRight className="h-4 w-4" />
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-lg font-semibold tracking-[0.26em] text-white">
              CASTL
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.26em] text-white/45">
              Presencia con criterio
            </p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/62">
              CASTL no es una simple tienda de zapatillas. Es una marca para
              personas que valoran la presencia, el criterio y la seguridad al
              elegir.
            </p>
          </div>

          <div className="grid gap-4 sm:justify-self-end">
            <a
              href={getWhatsappUrl(WHATSAPP_MENSAJE)}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/75 transition hover:text-white"
            >
              WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/75 transition hover:text-white"
            >
              Instagram
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/75 transition hover:text-white"
            >
              TikTok
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/75 transition hover:text-white"
            >
              Facebook
            </a>
          </div>
        </div>
      </footer>

      <ModalProducto
        producto={productoActivo}
        onClose={() => setProductoActivo(null)}
      />

      <CastlStylistModal
        isOpen={stylistOpen}
        onClose={() => setStylistOpen(false)}
        productosDisponibles={productosCatalogo}
        productoInicial={stylistProductoInicial}
      />

      <ComunidadCastelModal
        isOpen={comunidadOpen}
        onClose={() => setComunidadOpen(false)}
        onOpenStylist={() => {
          setStylistProductoInicial(null);
          setStylistOpen(true);
        }}
      />
    </main>
  );
}