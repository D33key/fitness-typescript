import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 justify-center gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo" />
          <p className="my-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            reiciendis itaque incidunt non quo, at quidem neque vel, fugiat
            deleniti dignissimos modi impedit sequi sunt. Consectetur magni
            rerum obcaecati adipisci.
          </p>
          <p>© All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem ipsum</p>
          <p className="my-5">Obcaecati fugit cum unde</p>
          <p className="my-5">Rem provident optio cum</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact us</h4>
          <p className="my-5">Lorem ipsum</p>
          <p className="my-5">Ipsum Lorem</p>
          <p className="my-5">Dodos el puerto noches</p>
          <p>(800)35-35-35</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
