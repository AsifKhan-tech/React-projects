/**
 * Footer — static footer.
 * No license or open-source attribution text as per requirement.
 */
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
          ShopVista &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
