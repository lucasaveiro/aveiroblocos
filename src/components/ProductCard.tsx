
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  price: number;
  image?: string | null;
  slug?: string | null;
};

export default function ProductCard({ id, title, price, image, slug }: Props) {
  return (
    <div className="bg-white border border-graybrand-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition">
      <div className="w-full aspect-square bg-graybrand-100 flex items-center justify-center">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-graybrand-400">Imagem do produto</div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-graybrand-800">{title}</h3>
        <p className="text-primary-600 mt-1">R$ {price.toFixed(2)}</p>
        <div className="mt-3">
          <Link href={slug ? `/produtos/${slug}` : `/produtos/${id}`}
            className="inline-flex items-center justify-center w-full rounded-xl border border-primary-500 text-primary-600 px-3 py-2 hover:bg-primary-500 hover:text-white transition">
            Saiba mais
          </Link>
        </div>
      </div>
    </div>
  );
}
