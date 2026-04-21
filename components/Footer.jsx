export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/40">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <div>
          <div className="text-sm font-medium text-white">Ubed Kazi</div>
          <div className="mt-1 text-[12px] text-white/40">
            Flutter Developer · Bhavnagar, India
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-white/40">
          <a href="mailto:Ubedkazii5151@gmail.com" className="transition hover:text-white">
            Ubedkazii5151@gmail.com
          </a>
          <a href="tel:+917041038720" className="transition hover:text-white">
            +91 70410 38720
          </a>
          <span>© {new Date().getFullYear()} All rights reserved</span>
        </div>
      </div>
    </footer>
  )
}
