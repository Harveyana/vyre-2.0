// import { useFireBase } from "./useFireBase"
//  const {getUser} = useFireBase()
//  import type { user } from '../interfaces';

 import { computed, ref } from 'vue'
//  import { createGlobalState } from '@vueuse/core'

 
 export const useGlobalState = createGlobalState(
   () => {
     // state
     const user = ref<any>()

     const showConfirmDialogue = ref(false)

     const showUpgradeDialogue = ref(false)

     const showActions = ref(false)


     const showLoader = ref(false)
     const ProgressNumber = ref(90)
     const Progress = ref('fetching documents')

     const openSetupDialog = ref(false)

     const assetMap = {
       bitcoin:{
        name:'bitcoin',
        type:'crypto',
        ISO:'BTC',
        tatum:'BTC',
        img:'https://firebasestorage.googleapis.com/v0/b/vyre-c9ca5.appspot.com/o/bitcoin.svg?alt=media&token=2a919a42-8962-40b5-9e2c-90e59c9d4d5d',
        symbol:'₿',
        chain:'Bitcoin',
        base:true,
        quote:false,
        balance:1.3
       },
       ethereum:{
        name:'ethereum',
        type:'crypto',
        ISO:'ETH',
        tatum:'ETH',
        img:'https://firebasestorage.googleapis.com/v0/b/vyre-c9ca5.appspot.com/o/ethereum.png?alt=media&token=1878b7a1-eb73-44c8-ab68-48fb8692bd44',
        symbol:'Ξ',
        chain:'Ethereum',
        base:true,
        quote:false,
        balance:3.3

       },
       litecoin:{
        name:'litecoin',
        type:'crypto',
        ISO:'LTC',
        tatum:'LTC',
        img:'https://firebasestorage.googleapis.com/v0/b/vyre-c9ca5.appspot.com/o/litecoin.svg?alt=media&token=5662267f-e506-4a4f-8648-138c6d904d5f',
        symbol:'Ł',
        chain:'Litecoin',
        base:true,
        quote:false,
        balance:13.3
       },
      //  ripple:{
      //   name:'ripple',
      //   type:'crypto',
      //   ISO:'XRP',
      //   tatum:'XRP',
      //   img:new URL("~/assets/img/currency/litecoin.svg",import.meta.url),
      //   symbol:'xrp',
      //   chain:'Ripple',
      //   base:true,
      //   quote:false,
      //   balance:4673.3
      //  },
       'USDT(trc20)':{
        name:'USDT(trc20)',
        ISO:'USDT_TRON',
        tatum:'USDT',
        type:'crypto',
        img: 'https://firebasestorage.googleapis.com/v0/b/vyre-c9ca5.appspot.com/o/usdt.svg?alt=media&token=044ac56f-ae72-4304-92ee-6e9a897d8e8c',
        symbol:'USD₮',
        chain:'Tron',
        base:true,
        quote:true,
        pairs:['BTC/USDT_TRON','LTC/USDT_TRON','ETH/USDT_TRON'],
        balance:14680

       },
       'USDT(erc20)':{
        name:'USDT(erc20)',
        ISO:'USDT_ETH',
        tatum:'USDT',
        type:'crypto',
        img: 'https://firebasestorage.googleapis.com/v0/b/vyre-c9ca5.appspot.com/o/usdt.svg?alt=media&token=044ac56f-ae72-4304-92ee-6e9a897d8e8c',
        symbol:' USD₮',
        chain:'Ethereum',
        base:true,
        quote:true,
        pairs:['BTC/USDT_ETH','LTC/USDT_ETH','ETH/USDT_ETH'],
        balance:15698.3
       },
       naira:{
        name:'naira',
        type:'fiat',
        img: 'https://firebasestorage.googleapis.com/v0/b/vyre-c9ca5.appspot.com/o/naira.png?alt=media&token=06ede98e-39ea-42cc-a5be-94e44628f355',
        symbol:'₦',
        ISO:'NGN',
        tatum:'NGN',
        country:'Nigeria',
        base:false,
        quote:true,
        pairs:['BTC/NGN','USDT_TRON/NGN','USDT_ETH/NGN','LTC/NGN','ETH/NGN','XRP/NGN'],
        balance:300500
       }
      }

     const pairs = {
      'BTC/NGN':{
        base:'bitcoin',
        quote:'naira',
        name:'BTC/NGN',
        threshold:50000
      },
      'USDT_TRON/NGN':{
        base:'USDT(trc20)',
        quote:'naira',
        name:'USDT_TRON/NGN',
        threshold:50000
      },
      'USDT_ETH/NGN':{
        base:'USDT(erc20)',
        quote:'naira',
        name:'USDT_ETH/NGN',
        threshold:50000
      },
      'LTC/NGN':{
        base:'litecoin',
        quote:'naira',
        name:'LTC/NGN',
        threshold:50000
      },
      'ETH/NGN':{
        base:'ethereum',
        quote:'naira',
        name:'ETH/NGN',
        threshold:50000
      },
      'BTC/USDT_ETH':{
        base:'bitcoin',
        quote:'USDT(erc20)',
        name:'BTC/USDT_ETH',
        threshold:3000
      },
      'LTC/USDT_ETH':{
        base:'litecoin',
        quote:'USDT(erc20)',
        name:'LTC/USDT_ETH',
        threshold:3000
      },
      'ETH/USDT_ETH':{
        base:'ethereum',
        quote:'USDT(erc20)',
        name:'ETH/USDT_ETH',
        threshold:3000

      },
      'BTC/USDT_TRON':{
        base:'bitcoin',
        quote:'USDT(trc20)',
        name:'BTC/USDT_TRON',
        threshold:3000

      },
      'LTC/USDT_TRON':{
        base:'litecoin',
        quote:'USDT(trc20)',
        name:'LTC/USDT_TRON',
        threshold:3000

      },
      'ETH/USDT_TRON':{
        base:'ethereum',
        quote:'USDT(trc20)',
        name:'ETH/USDT_TRON',
        threshold:3000

      }

    }


  


    //  const markdown = ref("# Harvey Anafuwe's Resume\n\n---\n\n## Contact Information\n\n**Email:** harveyana3@gmail.com  \n**GitHub:** [harveyana3](https://github.com/harveyana3)  \n**Location:** Lagos, Nigeria\n\n---\n\n## Personal Statement\n\nA seasoned Engineering professional with over 3 years of experience in leading software design and architecture, seeking a Software Developer position with Acme Technologies. Skilled in translating project requirements into executable technical specifications and excelling in developing scalable and reliable software solutions. Holds profound expertise in Java, Spring Boot, and Angular. Eager to leverage my problem-solving skills and attention to detail to contribute to the success of Acme Technologies and help drive growth by delivering superior cloud-based solutions to enterprise clients.\n\n---\n\n## Education\n\n**Petroleum Training Institute, Warri**  \n- Location: Delta State, Nigeria\n- Study Field: Engineering  \n(NOTE: Specific graduation date and degree details were not provided.)\n\n---\n\n## Professional Experience\n\n**Team Lead**  \nMicrographia, Lagos, Nigeria  \n2001 - 2004  \n- Spearheaded software design and architecture initiatives, ensuring alignment with client requirements and project goals.  \n- Played a key role in enhancing team collaboration and productivity by fostering a creative and inclusive work environment.  \n- Led the development and implementation of scalable and reliable software solutions, contributing significantly to the company's growth and success.  \n- [Micrographia](https://micrographia.design)\n\n---\n\n## Skills\n\n- **Programming Languages & Frameworks:** Proficient in Java, Spring Boot, and Angular.\n- **Software Development:** Extensive experience in designing, developing, and maintaining scalable software solutions.\n- **Problem-Solving:** Demonstrated ability to tackle complex software development challenges with innovative solutions.\n- **Team Collaboration:** Proven capability to work effectively with cross-functional teams, contributing to cohesive project execution.\n- **Code Documentation & Review:** Skilled in writing clean, efficient, and well-documented code; adept at performing thorough code reviews.\n- **Agile Methodologies:** Experience with agile development practices, enhancing project flexibility and delivering timely results.\n- **Adaptability:** Flexible in rapidly changing environments, prioritizing tasks to meet evolving project requirements.\n\n---\n\n## Achievements\n\n- Led a team that successfully completed several software projects on time and within budget, thereby increasing client satisfaction and retention.\n\n---\n\n## Certifications\n\n- (NOTE: Specific certifications, including potential AWS or Azure certifications, were not provided.)\n\n---\n\n## References\n\nAvailable upon request.\n\n---")

     // getters
    //  const isSetupCompleted = computed(() => {if (user.value.isSetupCompleted)return true;})
 
     // actions
    //  function increment() {
    //    count.value++
    //  }
 
     return {
      user,
      assetMap,
      pairs,
      showActions,
      showConfirmDialogue,
      openSetupDialog,
      showLoader,
      ProgressNumber,
      Progress,
      showUpgradeDialogue    }
   }
 )