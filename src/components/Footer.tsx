export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto text-center mb-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Terms and Conditions
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Sitemap
            </a>
          </li>
        </ul>
      </div>

      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; 2024. ALL RIGHTS RESERVED.</p>
        <p className="text-sm">
          All material on this website was created by Aptisweb. The material on
          this site is in no way affiliated with the British Council and is used
          for practice. We are in no way representing everything here is
          copyrighted material. While every effort has been made to simulate the
          real British Council Aptis exam accurately, please remember that this
          is simulated material. Before you take the Aptis exam, check the BC
          website for the latest updates and materials available there.
        </p>
      </div>
    </footer>
  );
}
