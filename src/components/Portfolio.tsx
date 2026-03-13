import { motion } from 'motion/react';

const projects = [
  {
    image: 'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/624888538_18217373722312082_2148043428031662746_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MzQ2MTc1MjIwMDU1ODYwMDQ4Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=IQ_ayiwHQGMQ7kNvwHtXSdE&_nc_oc=AdknvZrHkYbnHdcwc0GmZyEA2hCgGSgDtVszPEka7WjCJtDxM7zK5Hj6AQhnaLsQkjA&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=BzxsE9s8ZG4pX8UZKh0Flg&_nc_ss=8&oh=00_AfyET2mfMvgZfpgPcDaX1COn7UKgtfCz-eKoJ2yCCkBFSw&oe=69B9E129',
    title: 'Modern Bathroom Tile Installation',
    category: 'Bathroom Remodel',
  },
  {
    image: 'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.71878-15/604764765_3712420329053889_2507921858008534068_n.jpg?stp=dst-jpegr_e15_tt6&_nc_cat=107&ig_cache_key=Mzc5NDQ0MzUwMDY0MTg2MjQwNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2Lmhkci5DMyJ9&_nc_ohc=2BAQ5VZqQnQQ7kNvwEnFG_y&_nc_oc=AdlZZpkNdI7-ncLcw9qICodBEelANVIfgU1wxiPqXNsKvdkCwcSYY6cSt6sJrkWgMcA&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&se=-1&_nc_ht=instagram.fdac2-2.fna&_nc_gid=BzxsE9s8ZG4pX8UZKh0Flg&_nc_ss=8&oh=00_Afy6RTTUE5H-TyHrBjzGnpCHv5JZzT2J6fi0CZ4N4qbaBg&oe=69BA01E0',
    title: 'Herringbone Kitchen Backsplash',
    category: 'Kitchen Backsplash',
  },
  {
    image: 'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.71878-15/607268701_1609284780240890_6863861786029672697_n.jpg?stp=dst-jpegr_e15_tt6&_nc_cat=110&ig_cache_key=Mzc5NzA5Njk5NzE0NTEwMzczMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2Lmhkci5DMyJ9&_nc_ohc=y82ERur9FZYQ7kNvwE_moQE&_nc_oc=AdnqCiW2To0hztdXbO8TZG8OoyRDLfa4oaBwRTCv4cKkmwNveXr14aGd0OIgQoCb6xY&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&se=-1&_nc_ht=instagram.fdac2-1.fna&_nc_gid=BzxsE9s8ZG4pX8UZKh0Flg&_nc_ss=8&oh=00_Afwfhpkw0dSuG8d0QZDMcUYmIm9hkQTs_GiSW9zeTj8unw&oe=69B9EBC4',
    title: 'Large Format Floor Tile',
    category: 'Floor Tile',
  },
  {
    image: 'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.71878-15/602814084_785249497907401_1286415034938649517_n.jpg?stp=dst-jpegr_e15_tt6&_nc_cat=104&ig_cache_key=Mzc5MDAyNTExODc2OTI0Njc4MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2Lmhkci5DMyJ9&_nc_ohc=QRFulB3YoeUQ7kNvwF9ehYc&_nc_oc=AdlyJwqT4_ejwaS5JIsUbaTtTmRJJHwwtR5mLoQT_RBZzKTMuC01YUA2udbiKBwODIQ&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&se=-1&_nc_ht=instagram.fdac2-1.fna&_nc_gid=BzxsE9s8ZG4pX8UZKh0Flg&_nc_ss=8&oh=00_AfyCFw_U3dw0lPZU1_usHR-GB5vPtzjlFqNxpJqxcA5URA&oe=69BA0D01',
    title: 'Custom Mosaic Pattern',
    category: 'Custom Tile Design',
  },
  {
    image: 'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.71878-15/587484444_9634706339986368_5356819036184327923_n.jpg?stp=dst-jpegr_e15_tt6&_nc_cat=106&ig_cache_key=Mzc4NjM1MjY5NDQ4Mzc2NzY3NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2Lmhkci5DMyJ9&_nc_ohc=TWk23mHTGbgQ7kNvwGQWobk&_nc_oc=AdnzYpKFcH0cUffPELlzpBhZYPSvpQoCQ_1RlxgGFjlBr9Cufx9WJlQW3osTb1CDBfU&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&se=-1&_nc_ht=instagram.fdac2-2.fna&_nc_gid=BzxsE9s8ZG4pX8UZKh0Flg&_nc_ss=8&oh=00_Afzi8dVKe09SbT8XgcgzEgw4vjHE1ttFIpg4-Dch_uglhA&oe=69B9E3CC',
    title: 'Walk-in Shower Tile Remodeling',
    category: 'Shower Remodel',
  },
  {
    image: 'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/603743960_17918155860228034_8897882502484993802_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=111&ig_cache_key=Mzc4MTkwNjUwMjM2MjE5MzU5NzE3OTE4MTU1ODU0MjI4MDM0.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjU0MHg5NjAuc2RyLkMzIn0%3D&_nc_ohc=tcMPG7hLbhIQ7kNvwFtaeXN&_nc_oc=AdnlhISbHeKh0Uh2NRNiudAW2oE_YheXrDL-ovPhvUo-D7qeftDLZ5reITtmDHYAYcU&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=BzxsE9s8ZG4pX8UZKh0Flg&_nc_ss=8&oh=00_AfwmKBfkNaCjfhtIgQjpw0I-I9ojZOViIcxO2OaCM1P97A&oe=69B9E533',
    title: 'Before & After Tile Work',
    category: 'Transformation',
  },
  {
    image: 'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/589963029_17916789501228034_5907094906603142384_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=108&ig_cache_key=Mzc4MTg1OTQzMDQ2ODUxMDAwNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHg5NjAuc2RyLkMzIn0%3D&_nc_ohc=48HAd1ENfuUQ7kNvwGtfp76&_nc_oc=AdmML2SNgWpr7Dgx9DReuDaNkTAI9qsFx0t95OS6IETvk4TEKWyxrXzeEnRBmCTNtnM&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=BzxsE9s8ZG4pX8UZKh0Flg&_nc_ss=8&oh=00_AfzsaQoydQ5v4J8RLlBAjUO3oda-lHST4R4Qc08olvTSXw&oe=69B9FAEC',
    title: 'Premium Tile Installation',
    category: 'Tile Work',
  },
  {
    image: 'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.71878-15/588640198_1382449890140456_4641667655443395712_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ig_cache_key=Mzc4MDYyMzc1NjkwMjAyNjM1MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=0dHc-_XUF9AQ7kNvwGM2Xis&_nc_oc=Adm8NQeL_z6BCNUcamnnLq0Mgw7T6tAUFq8kxsFRDFY819BZMjhVrPIf4eHHBoVUz2g&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=uc34g-vTGgnZbvFiM1BKzw&_nc_ss=8&oh=00_Afzdw5NC_2ClWN0IXunHOYalKd4_hCalc1AMisk8moq0wg&oe=69B9EE9E',
    title: 'Bathroom Renovation',
    category: 'Bathroom Remodel',
  },
  {
    image: 'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/589101181_17916594336228034_5163559352385512877_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=100&ig_cache_key=Mzc4MDYxNjQ4NjU0NTgyMzEyOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHg5NjAuc2RyLkMzIn0%3D&_nc_ohc=7bTBQFtBmesQ7kNvwE8d3LT&_nc_oc=Adm0MBcXqRFHDkMsobuyD6mOx8TpsZJndtS-6DIQ5HwbYUQMNoICJtwcLTHZpAwVggc&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=uc34g-vTGgnZbvFiM1BKzw&_nc_ss=8&oh=00_AfzcheIq2bpmS_TTJqlR4dYoT7ggq5tyN8WEx-iGlT5HGQ&oe=69B9E14E',
    title: 'Custom Tile Work',
    category: 'Tile Design',
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-[#fcfcfc]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-[1px] w-8 bg-primary"></div>
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs">
              Curated Gallery
            </span>
            <div className="h-[1px] w-8 bg-primary"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 mt-4 mb-6"
          >
            A Legacy Of <span className="italic text-gray-400">Excellence</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              className="group relative overflow-hidden bg-gray-100"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-primary font-medium tracking-widest uppercase text-xs mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.category}
                </span>
                <h3 className="font-serif text-white text-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-24"
        >
          <a
            href="tel:9089066199"
            className="inline-flex items-center justify-center bg-gray-900 hover:bg-black text-white px-10 py-5 font-medium tracking-widest uppercase text-sm transition-all duration-300"
          >
            Discuss Your Vision
          </a>
        </motion.div>
      </div>
    </section>
  );
}
