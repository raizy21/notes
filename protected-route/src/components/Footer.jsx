function Footer() {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4 mt-auto">
      <aside>
        <p>
          Copyright &copy; {new Date().getFullYear()} - All rights reserved by{" "}
          <span className="text-primary">Noted.</span>
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
