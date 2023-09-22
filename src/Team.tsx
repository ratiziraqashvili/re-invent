type Props = {};

const teamMembers = [
  {
    name: 'Dali',
    imageSrc: 'https://uploads-ssl.webflow.com/62d5585bf8cc926daf147dd9/6347f97ec3ce80efcd2e6fc4_dako2.jpg',
    linkedinSrc: 'https://uploads-ssl.webflow.com/62d5585bf8cc926daf147dd9/630cea621fc37f307f02a122_linkedin.png',
    experience: '15 years of entrepreneurship experience',
    profile: 'https://www.linkedin.com/in/dako-mgeladze-9a8201260/'
  },
  {
    name: 'Ana',
    imageSrc: 'https://uploads-ssl.webflow.com/62d5585bf8cc926daf147dd9/6347f972837dca06a76ed182_anka2.jpg',
    linkedinSrc: 'https://uploads-ssl.webflow.com/62d5585bf8cc926daf147dd9/630cea621fc37f307f02a122_linkedin.png',
    experience: '18 years of entrepreneurship experience',
    profile: 'https://www.linkedin.com/in/ana-kvara/'
  },
  {
    name: 'Pavle',
    imageSrc: 'https://uploads-ssl.webflow.com/62d5585bf8cc926daf147dd9/62d5cce9173c0b178d101c9e_Untitled2_page1_image12.jpg',
    linkedinSrc: 'https://uploads-ssl.webflow.com/62d5585bf8cc926daf147dd9/630cea621fc37f307f02a122_linkedin.png',
    experience: 'Tech Entrepreneur',
    profile: 'https://www.linkedin.com/in/pavlemgeladze/'
  },
  {
    name: 'Lasha',
    imageSrc: 'https://uploads-ssl.webflow.com/62d5585bf8cc926daf147dd9/630ceb6eb6bc2a06e9afee6e_lasha.jpg',
    linkedinSrc: 'https://uploads-ssl.webflow.com/62d5585bf8cc926daf147dd9/630cea621fc37f307f02a122_linkedin.png',
    experience: '16 years experience in managing complex software projects with large tech teams',
    profile: 'https://www.linkedin.com/in/lasha-chelidze-000182107/'
  },
  {
    name: 'Giorgi',
    imageSrc: 'https://uploads-ssl.webflow.com/62d5585bf8cc926daf147dd9/632b2b8c9711cefb74f96bc8_WhatsApp%20Image%202022-09-21%20at%2015.47.25.jpeg',
    linkedinSrc: 'https://uploads-ssl.webflow.com/62d5585bf8cc926daf147dd9/630cea621fc37f307f02a122_linkedin.png',
    experience: '18 years experience in international commercial and business law',
    profile: 'https://www.linkedin.com/in/george-svanadze-ph-d-ll-m-mlb-bucerius-whu-69577639/'
  },
];

function Team({}: Props) {
    return (
        <div className='bg-black'>
          <div className='flex justify-center pt-10 md:pt-24 '>
            <h1 className='text-[#464d56] text-2xl md:text-3xl font-[Montserrat] font-[600]'>re:invent team</h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-5 gap-4 justify-center pt-10 max-w-[1400px] mr-auto ml-auto pb-32'>
            {teamMembers.map((member, index) => (
              <div key={index} className='flex flex-col items-center gap-3'>
                <img className='rounded-full grayscale w-[60%] hover:rotate-12 duration-500' src={member.imageSrc} alt={member.name} />
                <p className='uppercase text-white font-[Montserrat] font-[600]'>{member.name}</p>
                <a href={member.profile} target="_blank" rel="noopener noreferrer">
                  <img className='opacity-70 duration-300 transition-opacity hover:opacity-100 w-[30px]' src={member.linkedinSrc} alt="Linkedin" />
                </a>
                <p className='text-white text-center font-[Montserrat] font-[500]'>{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Team;
