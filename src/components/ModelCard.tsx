import Link from "next/link";
import Image from "next/image";
import { formatCurrency } from "@/lib/models";
import type { ModelData } from "@/lib/models";

const modelImages: Record<string, { src: string; alt: string }> = {
  "range-rover": { src: "/images/models/range-rover.png", alt: "Range Rover SV in Santorini Black" },
  "range-rover-sport": { src: "/images/models/range-rover-sport.png", alt: "Range Rover Sport SV Edition Two in Sunrise Copper" },
  "range-rover-evoque": { src: "/images/models/range-rover-evoque.png", alt: "Range Rover Evoque Autobiography in Carpathian Grey" },
  "range-rover-velar": { src: "/images/models/range-rover-velar.png", alt: "Range Rover Velar Belgravia Satin in Carpathian Grey" },
  "defender": { src: "/images/models/defender.png", alt: "Defender 110 OCTA in Borasco Grey" },
  "discovery": { src: "/images/models/discovery.png", alt: "Discovery Metropolitan Edition in Hakuba Silver" },
  "discovery-sport": { src: "/images/models/discovery-sport.png", alt: "Discovery Sport Dynamic SE in Eiger Grey" },
};

export function ModelCard({ model }: { model: ModelData }) {
  const image = modelImages[model.slug];

  return (
    <Link
      href={`/${model.slug}`}
      className="group block bg-rr-frost hover:bg-white border border-rr-mist hover:border-rr-pewter transition-all duration-500 overflow-hidden"
    >
      <div className="model-card-image-stage h-52">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain object-bottom model-card-car p-3"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : null}
        <span className="absolute bottom-3 left-5 text-[11px] tracking-[0.3em] text-white/50 uppercase z-10">{model.bodyType}</span>
      </div>
      <div className="p-6">
        <h3 className="text-[15px] font-light tracking-[0.15em] text-rr-black uppercase group-hover:text-rr-graphite transition-colors">
          {model.name}
        </h3>
        <p className="text-[13px] text-rr-silver mt-1.5">{model.tagline}</p>
        <div className="mt-5 pt-5 border-t border-rr-mist flex items-end justify-between">
          <div>
            <p className="text-[10px] tracking-[0.2em] text-rr-silver uppercase">Monthly from</p>
            <p className="text-2xl font-light text-rr-black mt-0.5">
              {formatCurrency(model.typicalMonthly)}
              <span className="text-[13px] text-rr-silver">/mo</span>
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] tracking-[0.2em] text-rr-silver uppercase">OTR from</p>
            <p className="text-[13px] text-rr-silver mt-0.5">{formatCurrency(model.priceFrom)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
