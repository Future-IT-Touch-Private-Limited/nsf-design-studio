import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  const service = [
    {
      title: "Residential Interior Design",
      description: [
        "We craft elegant and comfortable living spaces tailored to your lifestyle. Our residential interior design service focuses on functionality, warmth, and personal expression, blending architectural details with custom finishes.",
        "From space planning to furniture selection, color schemes to lighting design, every aspect is customized to create a cohesive home environment that speaks to your style and comfort.",
      ],
      image: "/images/ourService/1.webp",
      highlights: [
        "Personalized home designs",
        "Optimized layouts for everyday living",
        "Comfort-focused furniture solutions",
        "Elegant use of color and textures",
        "Functional and stylish storage ideas",
        "Warm, inviting atmospheres",
      ],
      faq: [
        {
          srNo: "1",
          question:
            "What is the typical process for starting a residential interior design project?",
          answer:
            "We begin with an in-depth consultation to understand your lifestyle and vision. From there, we move to planning, design presentations, material selection, and finally, execution to transform your space.",
        },
        {
          srNo: "2",
          question:
            "How long does a residential interior design project usually take?",
          answer:
            "Timelines vary based on project size and complexity, but most residential interiors are completed within 4 to 12 weeks from concept to installation.",
        },
        {
          srNo: "3",
          question: "Can you work within my budget for home interiors?",
          answer:
            "Absolutely! We design within your budget, offering cost-effective solutions without compromising on style or quality. Transparency is key throughout the process.",
        },
        {
          srNo: "4",
          question:
            "Do you only work on full home designs, or also individual rooms?",
          answer:
            "We handle everything from full home interior makeovers to single-room renovations—living rooms, kitchens, bedrooms, or any space you'd like to enhance.",
        },
        {
          srNo: "5",
          question: "Will I be involved in designing my home?",
          answer:
            "Yes! Your input is crucial. We collaborate closely with you to ensure the final design reflects your personality, preferences, and lifestyle needs.",
        },
        {
          srNo: "6",
          question:
            "Do you help with purchasing and setting up furniture and décor?",
          answer:
            "Yes, we handle procurement, delivery, and installation of furnishings, lighting, and décor items, ensuring a stress-free, end-to-end experience.",
        },
        {
          srNo: "7",
          question:
            "Can you incorporate my current furniture into the new design?",
          answer:
            "Of course! We love working with sentimental or existing pieces and blending them into the new design for a personalized and cohesive space.",
        },
      ],
    },
    {
      title: "Commercial Interior Design",
      description: [
        "We create dynamic, brand-forward commercial environments that enhance business performance and customer experience. Our designs promote workflow efficiency, client interaction, and a professional visual identity.",
        "From retail stores to corporate offices, we tailor solutions that reflect your brand while providing a smart and functional workspace for your team and clients.",
      ],
      image: "/images/ourService/2.webp",
      highlights: [
        "Brand-centric design strategies",
        "Workplace functionality & flow",
        "Modern aesthetics with purpose",
        "Client-friendly spatial arrangements",
        "Boosting professional appeal",
        "Customized for business goals",
      ],
      faq: [
        {
          srNo: "1",
          question:
            "What is your approach to starting a commercial interior design project?",
          answer:
            "We begin by understanding your business goals, brand identity, and operational needs. From there, we develop a design strategy that enhances functionality and reflects your company’s image.",
        },
        {
          srNo: "2",
          question:
            "How long does a commercial interior design project typically take?",
          answer:
            "Project duration depends on the scale and complexity, but most commercial interiors take anywhere from 6 to 16 weeks from planning to final execution.",
        },
        {
          srNo: "3",
          question:
            "Can you design within a specific budget for commercial spaces?",
          answer:
            "Yes! We align our design solutions with your financial plan, offering options that balance cost-efficiency with professional aesthetics and durability.",
        },
        {
          srNo: "4",
          question: "What types of commercial spaces do you specialize in?",
          answer:
            "We work across a variety of commercial environments including offices, retail stores, showrooms, hospitality spaces, clinics, and co-working hubs.",
        },
        {
          srNo: "5",
          question: "Will you collaborate with my team or project manager?",
          answer:
            "Absolutely! We believe in a collaborative process and regularly coordinate with stakeholders, project managers, and contractors to ensure smooth execution.",
        },
        {
          srNo: "6",
          question:
            "Do you manage furniture, fixtures, and equipment (FF&E) procurement?",
          answer:
            "Yes, we handle sourcing, purchasing, and installation of all necessary furnishings, fixtures, and equipment, saving you time and ensuring consistency in design.",
        },
        {
          srNo: "7",
          question:
            "Can you design around existing branding and company guidelines?",
          answer:
            "Definitely! We incorporate your brand elements, color palette, and values into the design to create a space that aligns with your company identity.",
        },
      ],
    },
    {
      title: "Furniture and Decor Selection",
      description: [
        "We help you select the right furniture and décor pieces that elevate your interior design. Whether it’s statement furniture or subtle accents, we ensure every choice complements your space.",
        "Our team curates a balance between visual appeal and utility, giving you a home that’s both functional and beautifully styled to your preferences.",
      ],
      image: "/images/ourService/3.webp",
      highlights: [
        "Curated furniture matching your theme",
        "Art & décor to enhance character",
        "Balance of form and function",
        "Custom recommendations by experts",
        "Timeless style selections",
        "Achieving cohesive interior harmony",
      ],
      faq: [
        {
          srNo: "1",
          question:
            "How do you choose the right furniture and décor for my space?",
          answer:
            "We consider your style preferences, functional needs, and space dimensions to curate pieces that enhance both aesthetics and practicality.",
        },
        {
          srNo: "2",
          question: "Can you work with my existing furniture and décor items?",
          answer:
            "Absolutely! We can integrate your current pieces into the new design and suggest complementary additions for a cohesive look.",
        },
        {
          srNo: "3",
          question: "Do you provide custom furniture options?",
          answer:
            "Yes, we offer custom-designed furniture solutions tailored to your space, style, and comfort requirements.",
        },
        {
          srNo: "4",
          question:
            "Do you handle the purchasing of furniture and décor items?",
          answer:
            "Yes, we manage sourcing, purchasing, and logistics to ensure a hassle-free experience and timely delivery of selected pieces.",
        },
        {
          srNo: "5",
          question:
            "Can you suggest décor pieces that match a specific theme or style?",
          answer:
            "Definitely! Whether it's modern, rustic, bohemian, or minimalist, we select décor items that align perfectly with your desired aesthetic.",
        },
        {
          srNo: "6",
          question: "How do you ensure the furniture fits well in my space?",
          answer:
            "We take precise measurements and use layout planning tools to ensure each piece complements the flow and scale of your space.",
        },
        {
          srNo: "7",
          question:
            "Do you offer eco-friendly or sustainable furniture options?",
          answer:
            "Yes, we can recommend sustainable and ethically sourced furniture and décor pieces to create an environmentally conscious design.",
        },
      ],
    },
    {
      title: "Modular Kitchen Design",
      description: [
        "Our modular kitchen design service focuses on creating kitchens that are sleek, practical, and tailor-made for your cooking habits and lifestyle.",
        "With intelligent storage, elegant finishes, and efficient layouts, we ensure your kitchen becomes the heart of your home. 3D visualization helps you preview the space before execution.",
      ],
      image: "/images/ourService/4.webp",
      highlights: [
        "Efficient kitchen workflows",
        "Stylish, modular cabinetry",
        "Smart storage and accessibility",
        "Tailored layouts for cooking needs",
        "Seamless design & functionality",
        "High-quality finishes and materials",
      ],
      faq: [
        {
          srNo: "1",
          question:
            "What is a modular kitchen and how is it different from a traditional kitchen?",
          answer:
            "A modular kitchen is a modern, pre-fabricated kitchen layout made up of modules or units that are easy to install, customize, and maintain—offering better functionality and space optimization compared to traditional kitchens.",
        },
        {
          srNo: "2",
          question:
            "Can you customize the modular kitchen to fit my space and needs?",
          answer:
            "Absolutely! We design modular kitchens based on your cooking habits, space dimensions, and storage needs to ensure a personalized experience.",
        },
        {
          srNo: "3",
          question:
            "What materials do you use for modular kitchen cabinets and countertops?",
          answer:
            "We use a variety of high-quality materials including MDF, marine plywood, acrylic, laminates, quartz, and granite depending on your budget and aesthetic preferences.",
        },
        {
          srNo: "4",
          question:
            "How long does it take to complete a modular kitchen design project?",
          answer:
            "Typically, a modular kitchen project takes between 3 to 6 weeks, depending on the complexity of the design and material availability.",
        },
        {
          srNo: "5",
          question:
            "Do you provide options for built-in appliances and accessories?",
          answer:
            "Yes, we offer integrated solutions including built-in ovens, chimneys, dishwashers, pull-out shelves, corner units, and more to enhance convenience and style.",
        },
        {
          srNo: "6",
          question:
            "Can you help with lighting and ventilation for the kitchen?",
          answer:
            "Definitely! We ensure that your modular kitchen includes optimal task lighting and proper ventilation systems for safety and comfort.",
        },
        {
          srNo: "7",
          question: "Is modular kitchen design suitable for small kitchens?",
          answer:
            "Yes, modular kitchens are ideal for small spaces as they are designed to maximize functionality and storage without compromising on style.",
        },
      ],
    },
    {
      title: "Lighting and False Ceiling",
      description: [
        "Lighting and ceiling design play a crucial role in defining the ambiance of your space. We design layered lighting plans that are both practical and atmospheric.",
        "Our false ceiling concepts add elegance and architectural interest, with integrated lighting and acoustic features to complete the look.",
      ],
      image: "/images/ourService/5.webp",
      highlights: [
        "Ambient, task, and accent lighting",
        "Creative ceiling designs",
        "Mood-enhancing illumination",
        "Modern false ceiling finishes",
        "Energy-efficient lighting solutions",
        "Enhanced room depth and aesthetics",
      ],
      faq: [
        {
          srNo: "1",
          question:
            "What is the purpose of a false ceiling in interior design?",
          answer:
            "False ceilings enhance the aesthetics of a space while concealing electrical wiring, improving acoustics, and providing better insulation and lighting control.",
        },
        {
          srNo: "2",
          question:
            "Can you customize lighting based on the room’s function and mood?",
          answer:
            "Absolutely! We design lighting schemes tailored to each room’s purpose—whether it’s ambient lighting for living rooms, task lighting for kitchens, or relaxing tones for bedrooms.",
        },
        {
          srNo: "3",
          question: "What materials are used for false ceilings?",
          answer:
            "We commonly use materials like gypsum, POP (Plaster of Paris), metal panels, and wood depending on the style, durability, and budget preferences.",
        },
        {
          srNo: "4",
          question:
            "Is it possible to install a false ceiling in an already finished space?",
          answer:
            "Yes, false ceilings can be installed in existing spaces with minimal disruption. Our team ensures a clean and efficient process.",
        },
        {
          srNo: "5",
          question:
            "What types of lighting can be integrated into false ceilings?",
          answer:
            "We can integrate a variety of lighting options such as recessed lights, LED strips, cove lighting, pendant lights, and spotlights for both functionality and ambiance.",
        },
        {
          srNo: "6",
          question:
            "How do false ceilings affect room temperature and energy efficiency?",
          answer:
            "False ceilings help trap air and reduce the load on air conditioners, making spaces more energy-efficient and comfortable year-round.",
        },
        {
          srNo: "7",
          question:
            "Can I change the lighting easily in a false ceiling setup?",
          answer:
            "Yes, we design accessible false ceilings to allow future upgrades or maintenance of lighting fixtures with ease.",
        },
      ],
    },
    {
      title: "3D Visualization and Planning",
      description: [
        "See your future interiors before they’re built with our detailed 3D visualization and planning services. We bring concepts to life using photo-realistic renders.",
        "From layout optimization to color palettes and finishes, our planning process ensures you make confident design decisions, with clear visual previews of your space.",
      ],
      image: "/images/ourService/6.webp",
      highlights: [
        "Photo-realistic 3D renders",
        "Preview spaces before execution",
        "Accurate planning and layouts",
        "Interactive client collaboration",
        "Detailed project visualization",
        "Reducing design guesswork",
      ],
      faq: [
        {
          srNo: "1",
          question: "What is 3D visualization in interior design?",
          answer:
            "3D visualization is the process of creating realistic digital renderings of your interior space to help you see and understand the design before implementation begins.",
        },
        {
          srNo: "2",
          question: "Why is 3D planning important for my project?",
          answer:
            "It allows you to make informed decisions, visualize layouts, color schemes, and furniture placements, and ensures clarity and alignment with your expectations.",
        },
        {
          srNo: "3",
          question: "Can I suggest changes after seeing the 3D render?",
          answer:
            "Yes! We encourage feedback and revisions during the 3D phase so that the final design perfectly suits your taste and needs.",
        },
        {
          srNo: "4",
          question: "How accurate are 3D designs compared to the final result?",
          answer:
            "Our 3D models are highly detailed and realistic, offering a close match to the final implemented space, helping eliminate guesswork and surprises.",
        },
        {
          srNo: "5",
          question: "Do I need technical knowledge to understand 3D plans?",
          answer:
            "Not at all. Our 3D visuals are designed to be user-friendly and easy to understand, allowing you to visualize your space without needing design expertise.",
        },
        {
          srNo: "6",
          question: "How long does it take to create a 3D design?",
          answer:
            "Depending on the project size and complexity, 3D designs typically take 3 to 7 days after the initial planning and measurements are completed.",
        },
        {
          srNo: "7",
          question: "Is 3D visualization included in your design services?",
          answer:
            "Yes, our design packages include 3D visualization as a standard feature to ensure you’re confident and satisfied before execution begins.",
        },
      ],
    },
    {
      title: "Renovation and Remodeling",
      description: [
        "Give your existing space a fresh start with our expert renovation and remodeling services. We transform outdated interiors into stylish, functional environments.",
        "From small updates to full overhauls, our team handles it all—planning, redesign, and execution—while preserving structure and enhancing style.",
      ],
      image: "/images/ourService/7.webp",
      highlights: [
        "Reviving outdated interiors",
        "Space reconfiguration expertise",
        "Blending new with existing design",
        "End-to-end project management",
        "Modernizing homes efficiently",
        "Transformations with lasting impact",
      ],
      faq: [
        {
          srNo: "1",
          question: "What is the difference between renovation and remodeling?",
          answer:
            "Renovation involves restoring or updating existing structures, while remodeling involves changing the layout, design, or structure of a space to meet new needs or aesthetics.",
        },
        {
          srNo: "2",
          question:
            "How long does a typical renovation or remodeling project take?",
          answer:
            "The timeline varies based on the scope of the project, but most renovations or remodels take anywhere from a few weeks to a few months to complete.",
        },
        {
          srNo: "3",
          question: "Do you provide design services for renovations?",
          answer:
            "Yes, we offer comprehensive design services for renovations, helping you plan the space effectively while keeping your vision and budget in mind.",
        },
        {
          srNo: "4",
          question:
            "Can you work with my existing layout, or do you recommend changes?",
          answer:
            "We can work with your existing layout or suggest changes based on functionality, aesthetics, and space optimization to ensure the renovation enhances the overall flow of your home.",
        },
        {
          srNo: "5",
          question:
            "How do I set a budget for a renovation or remodeling project?",
          answer:
            "We work closely with you to assess your needs and provide a detailed cost estimate that helps you set a realistic budget for the project. Transparency and flexibility are key in our approach.",
        },
        {
          srNo: "6",
          question: "Will my home be livable during the renovation?",
          answer:
            "For most renovation projects, we aim to minimize disruption and ensure your home remains habitable. However, certain major remodels may require temporary adjustments or relocation during construction.",
        },
        {
          srNo: "7",
          question:
            "Do you handle permits and legal requirements for remodeling?",
          answer:
            "Yes, we handle all necessary permits and ensure that the project complies with local regulations, so you don’t have to worry about legalities during the renovation process.",
        },
      ],
    },
  ];

  const quickLink = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about-us" },
    { title: "Services", link: "/service" },
    { title: "Blogs", link: "/blogs" },
    { title: "Contact Us", link: "/contact-us" },
  ];

  return (
    <footer className="bg-[#111c1b] text-white pt-10  px-5 md:px-12 xl:px-32 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-y-10  justify-between mb-8">
          <div className="space-y-4 lg:w-[30%]">
            <Link href="/">
              <img
                src="/images/NSF.webp"
                alt="NSF Design Studio"
                className="w-32 lg:w-44"
              />
            </Link>
            <p className="mt-2  text-gray-300 transition-colors duration-200">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart
              of me. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Incidunt, suscipit.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-[#7c877f] hover:bg-[#6a756c] rounded flex items-center justify-center text-white"
              >
                <RiInstagramFill className="text-lg" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-[#7c877f] hover:bg-[#6a756c] rounded flex items-center justify-center text-white"
              >
                <FaFacebook className="text-lg" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-[#7c877f] hover:bg-[#6a756c] rounded flex items-center justify-center text-white"
              >
                <FaTwitter className="text-lg" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC7Hw5YzWh_R5k3X1U1SaXJA"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-[#7c877f] hover:bg-[#6a756c] rounded flex items-center justify-center text-white"
              >
                <FaYoutube className="text-lg" />
              </a>
            </div>
          </div>

          <div className="space-y-2 md:hidden lg:block">
            <h5 className="font-bold text-xl">Services</h5>
            <ul className="space-y-1 text-sm text-gray-300">
              {service.slice(0, 5).map((item, idx) => (
                <li key={idx} className="py-2 border-b border-gray-700">
                  <Link
                    href={`/service/${item.title
                      .toLowerCase()
                      .split(" ")
                      .join("-")}`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2 md:hidden lg:block">
            <h5 className="font-bold text-xl">Quick Links</h5>
            <ul className="space-y-1 text-sm text-gray-300">
              {quickLink.map((item, idx) => (
                <li key={idx} className="py-2 border-b border-gray-700">
                  <Link href={item.link}> {item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className=" md:grid-cols-2 hidden md:grid lg:hidden pl-4 ">
            <div className="space-y-2 ">
              <h5 className="font-bold text-xl">Services</h5>
              <ul className="space-y-1 text-sm text-gray-300">
                {service.slice(0, 5).map((item, idx) => (
                  <li key={idx} className="py-2 border-b border-gray-600">
                    <Link
                      href={`/service/${item.title
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h5 className="font-bold text-xl">Quick Links</h5>
              <ul className="space-y-1 text-sm text-gray-300">
                {quickLink.map((item, idx) => (
                  <li key={idx} className="py-2 border-b border-gray-600">
                    <Link href={item.link}> {item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-2 lg:w-[35%] xl:w-[30%] flex flex-col items-start ">
            <h5 className="font-bold text-xl">Our Address</h5>

            {/* <h6 className="">Head Office</h6> */}
            <div className="flex items-start gap-x-2   text-gray-300 transition-colors duration-200">
              <IoLocationOutline className="mt-2 " />
              <p className="">
                #689/404, 1st floor, Varthur Main Road, Gandhi circle,
                Bangalore, Karnataka India - 560087
                {/* #123 Lorem Street, Ipsum Nagar, Dolor City, 400001, India */}
              </p>
            </div>
            <div className="flex flex-col gap-y-2  text-gray-300 hover:text-gray-100 transition-colors duration-200 ">
              <a
                href="tel:+91 82968 19909"
                className="flex items-center gap-x-2  hover:text-gray-100"
              >
                <MdOutlineLocalPhone className="" />
                +91 82968 19909
              </a>
              <a
                href="mailto:nsfstudiodesign@gmail.com"
                className="flex items-center gap-x-2  hover:text-gray-100"
              >
                <HiOutlineMail />
                nsfstudiodesign@gmail.com
              </a>
            </div>

            {/* <div className="flex flex-wrap gap-y-2 mt-2 items-center gap-x-4">
            {payments.map((elm, index) => (
              <div key={index}>
                <div className="py-2 px-2 rounded shadow-2xl bg-[#074a51] flex items-center justify-center">
                  <img
                    src={elm.img}
                    alt="payments"
                    className="h-3 xl:h-4 w-auto object-cover object-center"
                  />
                </div>
              </div>
            ))}
          </div> */}
          </div>
        </div>
      </div>

      <hr className="text-gray-200" />
      <div className="py-5 container mx-auto  relative z-10">
        <div className="md:flex flex-wrap lg:justify-between items-center text-sm text-white justify-center md">
          <p className="text-center  text-gray-400 hover:text-gray-100 transition-colors duration-200">
            © {new Date().getFullYear()} NSF Design Studio . All rights
            reserved.
          </p>
          <p className=" text-gray-400 hover:text-gray-100 transition-colors duration-200">
            <span className="flex md justify-center md">
              Designed by&nbsp;
              <a
                href="https://www.futuretouch.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Future IT Touch ❤️
              </a>
            </span>
          </p>
          <div className="space-x-4 mb-2 md:mb-0  flex md justify-center md">
            <Link
              className=" text-gray-400 hover:text-gray-100 transition-colors duration-200"
              href="/privacy-policy"
            >
              Privacy Policy |
            </Link>
            <Link
              className=" text-gray-400 hover:text-gray-100 transition-colors duration-200"
              href="/terms-condition"
            >
              Terms & Conditions |
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
