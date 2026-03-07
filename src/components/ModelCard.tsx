import Link from "next/link";
import { formatCurrency } from "@/lib/models";
import type { ModelData } from "@/lib/models";

export function ModelCard({ model }: { model: ModelData }) {
  return (
    <Link
      href={`/${model.slug}`}
      className="group block bg-rr-frost hover:bg-white border border-rr-mist hover:border-rr-pewter transition-all duration-500 overflow-hidden"
    >
      <div className="h-52 bg-gradient-to-br from-rr-graphite to-rr-black flex items-end p-6">
        <span className="text-[11px] tracking-[0.3em] text-white/30 uppercase">{model.bodyType}</span>
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
