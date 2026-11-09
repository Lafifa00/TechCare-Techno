import { TUTORIALS, waLink } from "@/lib/config";
export const metadata = { title: "Layanan & Tutorial – Tech Care" };
export default function Layanan() {
  return (<div className="wrap"><h1 className="h2">Layanan Pemasangan</h1><p className="mut">Lokasi dan biaya disepakati lewat chat sebelum kami berangkat.</p>
    <div className="grid"><div className="card"><h3>Kami datang ke tempatmu</h3><p className="mut">Teknisi memasang dan menguji semua perangkat di meja streaming-mu.</p></div>
      <div className="card"><h3>Kamu datang ke toko kami</h3><p className="mut">Bawa PC atau perangkatmu, kami pasang dan setting langsung.</p></div></div>
    <a className="btn wa" href={waLink("Halo, saya mau tanya jasa pemasangan")} target="_blank" rel="noopener">Tanya jasa pasang</a>
    <h2>Tutorial Pemasangan (Gratis)</h2><div className="grid">{TUTORIALS.map((v) => (<div className="card vid" key={v.title}>
      {v.id ? <iframe src={`https://www.youtube-nocookie.com/embed/${v.id}`} title={v.title} loading="lazy" allowFullScreen /> : <div className="th">▶</div>}<h3>{v.title}</h3><p className="mut sm">{v.tag}</p></div>))}</div></div>);
}
