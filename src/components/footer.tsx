export default function Footer() {
  return (
    // <div className="mb-5 flex h-16 w-full items-center justify-between"></div>
    <div className="mt-10 flex flex-col items-center gap-y-4 pl-3 tracking-tight text-[#a3afbe] xl:flex-row xl:justify-between xl:gap-y-0">
      <div className="text-center font-semibold">
        © 2024 Horizon UI. All Rights Reserved. Made with love by{" "}
        <span className="font-extrabold">Simmmple!</span>
      </div>
      <div className="flex items-center gap-x-3 pr-3 md:gap-x-10">
        <p>Support</p>
        <p>License</p>
        <p>Terms of Use</p>
        <p>Blog</p>
      </div>
    </div>
  );
}
