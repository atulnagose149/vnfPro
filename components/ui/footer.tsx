export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
          Contact Us
        </h2>
        <form action="">
          <input type="text" placeholder="Name" />
          <br />
          <br />
          <input type="email" name="" id="" placeholder="Email" />
          <br />
          <br />
          <input type="text" name="" id="" placeholder="Subject" />
          <br />
          <br />
          <textarea name="" id="" placeholder="Message" />
          <br />
          <br />
          <button>
            <span className="btn-sm relative rounded-full bg-gray-800/40 px-8 py-4 mb-10 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Submit
              </span>
            </span>
          </button>
        </form>
      </div>
    </footer>
  );
}
