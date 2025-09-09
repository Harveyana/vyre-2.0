<template>
    <div class="w-full h-full bg-white  rounded-xl">

  

      <div class="w-full items-start justify-start">
        <div class="w-full flex items-start">

          <div class="w-full flex flex-col items-start ">

            <p class="Grotesque-Regular text-[16px] text-[#737373]">
              Enter your
            </p>
            <h3 class="Grotesque-Bold text-[20px] text-[#1A1A1A]">
              Personal Information
            </h3>

          </div>

          <button
             class="bg-[#F1F0FE] py-2 px-4 text-black text-xs rounded-md whitespace-nowrap"
            >
            Step 1 of 4
          </button>

        </div>
        
        

        <div class="flex flex-col h-[70vh] overflow-y-auto w-full gap-y-6 pb-12">

          <form
            @submit.prevent="submitForm()"
            class="w-full mt-4 flex flex-col gap-y-4"
          >
            <!-- <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Business Type
              </label>
              <DropSelect :key="resetKey" class="w-full" @update="(value:string)=>{business.type = value}" :options="['Registered Businesss','Non-Registered Business']" />
            </div> -->

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                First Name
              </label>
              <input
                required
                v-model="firstName"
                type="text"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                placeholder="Legal First Name"
              />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Last Name
              </label>
              <input
                required
                v-model="lastName"
                type="text"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                placeholder="Legal last Name"
              />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Phone Number
              </label>
              <input
                required
                type="tel"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                v-model="phoneNumber"
                placeholder="+234 816754587"
              />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Date of Birth
              </label>
              <input
                required
                type="date"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                v-model="DOB"
                placeholder=""
              />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Occupation
              </label>
              <!-- <input
                required
                type="text"
                class="Grotesque-Regular text-[14px] w-full bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 px-3 py-2.5 rounded-2xl flex items-center justify-between outline-none"
                v-model="occupation"
                placeholder="Hardware Engineer"
              /> -->
              <Options :key="resetKey" class="w-full" @update="(value:string)=>{occupation = value}" :options="occupationOptions" />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Employment Status
              </label>
              <Options :key="resetKey" class="w-full" @update="(value:string)=>{employmentStatus = value}" :options="employmentStatusOptions" />
            </div>

            <div class="w-full relative">
              <label class="Grotesque-Regular text-md text-[#010109]">
                Source Of Funds
              </label>
              <Options :key="resetKey" class="w-full" @update="(value:string)=>{sourceOfFunds = value}" :options="sourceOfFundsOptions" />
            </div>



            <button
              type="submit"
              class="w-ful py-3 bg-black text-white text-[15px] rounded-xl mt-6"
            >
              Proceed
            </button>

            <!-- <p
              class="text-sm text-[#737373] text-left cursor-pointer Grotesque-Regular my-2"
            >
              Got an existing account?
              <span
                @click="$router.push('/auth?tab=login')"
                class="text-[#0050AB] cursor-pointer"
                >Login</span
              >
            </p> -->
          </form>

          
        </div>
      </div>

    </div>
  </template>
  <script setup lang="ts">
  
  // const imageFile = ref<File>()
   const resetKey = ref(2)

   const firstName = defineModel<string>('firstName')
    const lastName = defineModel<string>('lastName')
    const phoneNumber = defineModel<string>('phoneNumber')
    const DOB = defineModel<string>('DOB')
    const occupation = defineModel<string>('occupation')
    const sourceOfFunds = defineModel<string>('sourceOfFunds')
    const employmentStatus = defineModel<string>('employmentStatus')

    // const currency = defineModel<string>('currency',{ default: selectedCurrency.value?.currency  })

    // const personal = reactive({
    //   // type:'',
    //   firstName:'',
    //   lastName:'',
    //   phoneNumber:'',
    //   DOB:'',
    //   occupation:'',
    //   sourceOfFunds:''
    // })

  const emit = defineEmits(['back','next'])  // Declare Events

  const submitForm = async()=>{
    // console.log(personal)
    
    if(!firstName.value || 
      !lastName.value || 
      !phoneNumber.value || 
      !DOB.value
    ) return
    // console.log(personal)

    emit('next', {
      firstName: firstName.value,
      lastName:lastName.value, 
      phoneNumber: phoneNumber.value, 
      DOB:DOB.value
    })

  }

  const sourceOfFundsOptions = [

    { label: "Company Funds", value: "COMPANY_FUNDS" },
    { label: "E-commerce Reseller", value: "E_COMMERCE_RESELLER" },
    { label: "Gambling Proceeds", value: "GAMBLING_PROCEEDS" },
    { label: "Gifts", value: "GIFTS" },
    { label: "Government Benefits", value: "GOVERNMENT_BENEFITS" },
    { label: "Inheritance", value: "INHERITANCE" },
    { label: "Investments or Loans", value: "INVESTMENTS_OR_LOANS" },
    { label: "Pension/Retirement Funds", value: "PENSION_RETIREMENT_FUNDS" },
    { label: "Real Estate Sales Proceeds", value: "PROCEEDS_FROM_REAL_ESTATE_SALES" },
    { label: "Salary", value: "SALARY" },
    { label: "Savings", value: "SAVINGS" },
    { label: "Someone Else's Funds", value: "SOMEONE_ELSES_FUNDS" },
    { label: "Business Loans", value: "BUSINESS_LOANS" },
    { label: "Grants", value: "GRANTS" },
    { label: "Inter-Company Funds", value: "INTER_COMPANY_FUNDS" },
    { label: "Investment Proceeds", value: "INVESTMENT_PROCEEDS" },
    { label: "Legal Settlement", value: "LEGAL_SETTLEMENT" },
    { label: "Owner's Capital", value: "OWNERS_CAPITAL" },
    { label: "Pension or Retirement", value: "PENSION_OR_RETIREMENT" },
    { label: "Sale of Assets", value: "SALE_OF_ASSETS" },
    { label: "Sale of Goods/Services", value: "SALE_OF_GOODS_AND_SERVICES" },
    { label: "Tax Refund", value: "TAX_REFUND" },
    { label: "Third Party Funds", value: "THIRD_PARTY_FUNDS" },
    { label: "Treasury Reserves", value: "TREASURY_RESERVES" }
  ]

  const employmentStatusOptions = [
    { label: "Employed", value: "EMPLOYED" },
    { label: "Self-Employed", value: "SELF_EMPLOYED" },
    { label: "Unemployed", value: "UNEMPLOYED" },
    { label: "Retired", value: "RETIRED" },
    { label: "Student", value: "STUDENT" },
    { label: "Homemaker", value: "HOMEMAKER" }
  ]

  const occupationOptions = [
    { label: "Accountant and auditor", value: "132011" },
    { label: "Actor", value: "272011" },
    { label: "Actuary", value: "152011" },
    { label: "Acupuncturist", value: "291291" },
    { label: "Adhesive bonding machine operator and tender", value: "519191" },
    { label: "Administrative services manager", value: "113012" },
    { label: "Advertising and promotions manager", value: "112011" },
    { label: "Advertising sales agent", value: "413011" },
    { label: "Aerospace engineer", value: "172011" },
    { label: "Agent and business manager of artists, performers, and athletes", value: "131011" },
    { label: "Agricultural and food science technician", value: "194010" },
    { label: "Agricultural and food scientist", value: "191010" },
    { label: "Agricultural engineer", value: "172021" },
    { label: "Agricultural inspector", value: "452011" },
    { label: "Air traffic controller and airfield operations specialist", value: "532020" },
    { label: "Aircraft mechanic and service technician", value: "493011" },
    { label: "Aircraft pilots and flight engineer", value: "532010" },
    { label: "Aircraft structure, surfaces, rigging, and systems assembler", value: "512011" },
    { label: "Ambulance driver and attendant, except emergency medical technician", value: "533011" },
    { label: "Animal breeder", value: "452021" },
    { label: "Animal caretaker", value: "392021" },
    { label: "Animal control worker", value: "339011" },
    { label: "Animal trainer", value: "392011" },
    { label: "Architect, except landscape and naval", value: "171011" },
    { label: "Architectural and civil drafter", value: "173011" },
    { label: "Architectural and engineering manager", value: "119041" },
    { label: "Archivist, curator, and museum technician", value: "254010" },
    { label: "Artist and related worker", value: "271010" },
    { label: "Astronomer and physicist", value: "192010" },
    { label: "Athletes and sports competitor", value: "272021" },
    { label: "Atmospheric and space scientist", value: "192021" },
    { label: "Audiologist", value: "291181" },
    { label: "Audiovisual equipment installer and repairer", value: "492097" },
    { label: "Automotive body and related repairer", value: "493021" },
    { label: "Automotive glass installer and repairer", value: "493022" },
    { label: "Automotive service technician and mechanic", value: "493023" },
    { label: "Avionics technician", value: "492091" },
    { label: "Baggage porter, bellhop, and concierge", value: "396010" },
    { label: "Bailiff", value: "333011" },
    { label: "Baker", value: "513011" },
    { label: "Barber", value: "395011" },
    { label: "Bartender", value: "353011" },
    { label: "Bill and account collector", value: "433011" },
    { label: "Billing and posting clerk", value: "433021" },
    { label: "Bioengineer and biomedical engineer", value: "172031" },
    { label: "Biological scientist", value: "191020" },
    { label: "Biological technician", value: "194021" },
    { label: "Boilermaker", value: "472011" },
    { label: "Bookkeeping, accounting, and auditing clerk", value: "433031" },
    { label: "Brickmason, blockmason, and stonemason", value: "472020" },
    { label: "Broadcast announcer and radio disc jockey", value: "273011" },
    { label: "Broadcast, sound, and lighting technician", value: "274010" },
    { label: "Brokerage clerk", value: "434011" },
    { label: "Budget analyst", value: "132031" },
    { label: "Bus and truck mechanic and diesel engine specialist", value: "493031" },
    { label: "Business operations specialist, other", value: "131199" },
    { label: "Butcher and other meat, poultry, and fish processing worker", value: "513020" },
    { label: "Buyer and purchasing agent, farm products", value: "131021" },
    { label: "Cabinetmaker and bench carpenter", value: "517011" },
    { label: "Cardiovascular technologist and technician", value: "292031" },
    { label: "Cargo and freight agent", value: "435011" },
    { label: "Carpenter", value: "472031" },
    { label: "Carpet, floor, and tile installer and finisher", value: "472040" },
    { label: "Cashier", value: "412010" },
    { label: "Cement mason, concrete finisher, and terrazzo worker", value: "472050" },
    { label: "Chef and head cook", value: "351011" },
    { label: "Chemical engineer", value: "172041" },
    { label: "Chemical processing machine setter, operator, and tender", value: "519010" },
    { label: "Chemical technician", value: "194031" },
    { label: "Chemist and materials scientist", value: "192030" },
    { label: "Chief executive", value: "111011" },
    { label: "Child, family, and school social worker", value: "211021" },
    { label: "Childcare worker", value: "399011" },
    { label: "Chiropractor", value: "291011" },
    { label: "Civil engineer", value: "172051" },
    { label: "Claims adjuster, appraiser, examiner, and investigator", value: "131030" },
    { label: "Cleaner of vehicles and equipment", value: "537061" },
    { label: "Clergy", value: "212011" },
    { label: "Clinical and counseling psychologist", value: "193033" },
    { label: "Clinical laboratory technologist and technician", value: "292010" },
    { label: "Coaches and scout", value: "272022" },
    { label: "Coin, vending, and amusement machine servicer and repairer", value: "499091" },
    { label: "Commercial and industrial designer", value: "271021" },
    { label: "Commercial diver", value: "499092" },
    { label: "Communications equipment operator, other", value: "432099" },
    { label: "Compensation and benefits manager", value: "113111" },
    { label: "Compensation, benefits, and job analysis specialist", value: "131141" },
    { label: "Compliance officer", value: "131041" },
    { label: "Computer and information research scientist", value: "151221" },
    { label: "Computer and information systems manager", value: "113021" },
    { label: "Computer hardware engineer", value: "172061" },
    { label: "Computer network architect", value: "151241" },
    { label: "Computer numerically controlled tool operator and programmer", value: "519160" },
    { label: "Computer occupation, other", value: "151299" },
    { label: "Computer programmer", value: "151251" },
    { label: "Computer support specialist", value: "151230" },
    { label: "Computer systems analyst", value: "151211" },
    { label: "Computer, automated teller, and office machine repairer", value: "492011" },
    { label: "Conservation scientist and forester", value: "191030" },
    { label: "Construction and building inspector", value: "474011" },
    { label: "Construction equipment operator", value: "472070" },
    { label: "Construction laborer", value: "472061" },
    { label: "Construction manager", value: "119021" },
    { label: "Control and valve installer and repairer", value: "499010" },
    { label: "Conveyor, dredge, and hoist and winch operator", value: "5370XX" },
    { label: "Cook", value: "352010" },
    { label: "Correctional officer and jailer", value: "333012" },
    { label: "Correspondence clerk", value: "434021" },
    { label: "Cost estimator", value: "131051" },
    { label: "Counselor, other", value: "211019" },
    { label: "Counter and rental clerk", value: "412021" },
    { label: "Courier and messenger", value: "435021" },
    { label: "Court reporter and simultaneous captioner", value: "273092" },
    { label: "Court, municipal, and license clerk", value: "434031" },
    { label: "Crane and tower operator", value: "537021" },
    { label: "Credit analyst", value: "132041" },
    { label: "Credit authorizer, checker, and clerk", value: "434041" },
    { label: "Credit counselor and loan officer", value: "132070" },
    { label: "Crossing guard and flagger", value: "339091" },
    { label: "Crushing, grinding, polishing, mixing, and blending worker", value: "519020" },
    { label: "Customer service representative", value: "434051" },
    { label: "Cutting worker", value: "519030" },
    { label: "Cutting, punching, and press machine setter, operator, and tender, metal and plastic", value: "514031" },
    { label: "Dancer and choreographer", value: "272030" },
    { label: "Data labeler and data entry keyer", value: "439021" },
    { label: "Database administrator and architect", value: "15124X" },
    { label: "Dental and ophthalmic laboratory technician and medical appliance technician", value: "519080" },
    { label: "Dental assistant", value: "319091" },
    { label: "Dental hygienist", value: "291292" },
    { label: "Dentist", value: "291020" },
    { label: "Derrick, rotary drill, and service unit operator, oil and gas", value: "475010" },
    { label: "Desktop publisher", value: "439031" },
    { label: "Detective and criminal investigator", value: "333021" },
    { label: "Diagnostic medical sonographer", value: "292032" },
    { label: "Dietetic technician and ophthalmic medical technician", value: "29205X" },
    { label: "Dietitian and nutritionist", value: "291031" },
    { label: "Dining room and cafeteria attendant and bartender helper", value: "359011" },
    { label: "Director, religious activities and educatio", value: "212021" },
    { label: "Disc jockey, except radio", value: "272091" },
    { label: "Dishwasher", value: "359021" },
    { label: "Dispatcher, except police, fire, and ambulance", value: "435032" },
    { label: "Door-to-door sales worker, news and street vendor, and related worker", value: "419091" },
    { label: "Driver/sales worker and truck driver", value: "533030" },
    { label: "Drywall installer, ceiling tile installer, and taper", value: "472080" },
    { label: "Earth driller, except oil and gas", value: "475023" },
    { label: "Economist", value: "193011" },
    { label: "Editor", value: "273041" },
    { label: "Education and childcare administrator", value: "119030" },
    { label: "Educational, guidance, and career counselor and advisor", value: "211012" },
    { label: "Electric motor, power tool, and related repairer", value: "492092" },
    { label: "Electrical and electronic engineering technologist and technician", value: "173023" },
    { label: "Electrical and electronics engineer", value: "172070" },
    { label: "Electrical and electronics installer and repairer, transportation equipment", value: "492093" },
    { label: "Electrical and electronics repairer, industrial and utility", value: "49209X" },
    { label: "Electrical power-line installer and repairer", value: "499051" },
    { label: "Electrical, electronics, and electromechanical assembler", value: "512020" },
    { label: "Electrician", value: "472111" },
    { label: "Electronic equipment installer and repairer, motor vehicles", value: "492096" },
    { label: "Elementary and middle school teacher", value: "252020" },
    { label: "Elevator and escalator installer and repairer", value: "474021" },
    { label: "Eligibility interviewer, government programs", value: "434061" },
    { label: "Embalmer, crematory operator and funeral attendant", value: "3940XX" },
    { label: "Emergency management director", value: "119161" },
    { label: "Emergency medical technician", value: "292042" },
    { label: "Emergency medicine physician", value: "291214" },
    { label: "Engine and other machine assembler", value: "512031" },
    { label: "Engineer, other", value: "172199" },
    { label: "Entertainer and performer, sports and related worker, other", value: "272099" },
    { label: "Entertainment and recreation manager", value: "119070" },
    { label: "Environmental engineer", value: "172081" },
    { label: "Environmental science and geoscience technician", value: "194040" },
    { label: "Environmental scientist and specialist, including health", value: "192041" },
    { label: "Etcher and engraver", value: "519194" },
    { label: "Excavating and loading machine and dragline operator, surface mining", value: "475022" },
    { label: "Executive secretary and executive administrative assistant", value: "436011" },
    { label: "Exercise physiologist", value: "291128" },
    { label: "Exercise trainer and group fitness instructor", value: "399031" },
    { label: "Explosives worker, ordnance handling expert, and blaster", value: "475032" },
    { label: "Extruding, forming, pressing, and compacting machine setter, operator, and tender", value: "519041" },
    { label: "Facilities manager", value: "113013" },
    { label: "Farmer, rancher, and other agricultural manager", value: "119013" },
    { label: "Fashion designer", value: "271022" },
    { label: "Fast food and counter worker", value: "353023" },
    { label: "Fence erector", value: "474031" },
    { label: "File clerk", value: "434071" },
    { label: "Financial and investment analyst", value: "132051" },
    { label: "Financial clerk, other", value: "433099" },
    { label: "Financial examiner", value: "132061" },
    { label: "Financial manager", value: "113031" },
    { label: "Fire inspector", value: "332020" },
    { label: "Firefighter", value: "332011" },
    { label: "First-line enlisted military supervisor", value: "552010" },
    { label: "First-line supervisor of construction trades and extraction worker", value: "471011" },
    { label: "First-line supervisor of correctional officer", value: "331011" },
    { label: "First-line supervisor of farming, fishing, and forestry worker", value: "451011" },
    { label: "First-line supervisor of firefighting and prevention worker", value: "331021" },
    { label: "First-line supervisor of food preparation and serving workers", value: "351012" },
    { label: "First-line supervisor of housekeeping and janitorial workers", value: "371011" },
    { label: "First-line supervisor of landscaping, lawn service, and groundskeeping workers", value: "371012" },
    { label: "First-line supervisor of mechanics, installers, and repairers", value: "491011" },
    { label: "First-line supervisor of non-retail sales workers", value: "411012" },
    { label: "First-line supervisor of office and administrative support workers", value: "431011" },
    { label: "First-line supervisor of police and detective", value: "331012" },
    { label: "First-line supervisor of production and operating worker", value: "511011" },
    { label: "First-line supervisor of protective service worker, other", value: "331099" },
    { label: "First-line supervisor of retail sales workers", value: "411011" },
    { label: "First-line supervisor of security worker", value: "331091" },
    { label: "Fish and game warden", value: "333031" },
    { label: "Fishing and hunting worker", value: "453031" },
    { label: "Flight attendant", value: "532031" },
    { label: "Floral designer", value: "271023" },
    { label: "Food and tobacco roasting, baking, and drying machine operator and tender", value: "513091" },
    { label: "Food batchmaker", value: "513092" },
    { label: "Food cooking machine operator and tender", value: "513093" },
    { label: "Food preparation and serving related worker, other", value: "359099" },
    { label: "Food preparation worker", value: "352021" },
    { label: "Food processing worker, other", value: "513099" },
    { label: "Food server, nonrestaurant", value: "353041" },
    { label: "Food service manager", value: "119051" },
    { label: "Forest and conservation worker", value: "454011" },
    { label: "Forming machine setter, operator, and tender, metal and plastic", value: "514020" },
    { label: "Fundraiser", value: "131131" },
    { label: "Funeral home manager", value: "119171" },
    { label: "Furnace, kiln, oven, drier, and kettle operator and tender", value: "519051" },
    { label: "Furniture finisher", value: "517021" },
    { label: "Gambling cage worker", value: "433041" },
    { label: "Gambling services worker", value: "393010" },
    { label: "General and operations manager", value: "111021" },
    { label: "Geoscientist and hydrologist, except geographer", value: "19204X" },
    { label: "Glazier", value: "472121" },
    { label: "Grader and sorter, agricultural product", value: "452041" },
    { label: "Graphic designer", value: "271024" },
    { label: "Grinding, lapping, polishing, and buffing machine tool setter, operator, and tender, metal and plastic", value: "514033" },
    { label: "Hairdresser, hairstylist, and cosmetologist", value: "395012" },
    { label: "Hazardous materials removal worker", value: "474041" },
    { label: "Healthcare diagnosing or treating practitioner, other", value: "291299" },
    { label: "Healthcare social worker", value: "211022" },
    { label: "Heating, air conditioning, and refrigeration mechanic and installer", value: "499021" },
    { label: "Heavy vehicle and mobile equipment service technician and mechanic", value: "493040" },
    { label: "Helper--installation, maintenance, and repair worker", value: "499098" },
    { label: "Helper--production worker", value: "519198" },
    { label: "Helper, construction trade", value: "473010" },
    { label: "Highway maintenance worker", value: "474051" },
    { label: "Home appliance repairer", value: "499031" },
    { label: "Home health aide", value: "311121" },
    { label: "Host and hostess, restaurant, lounge, and coffee shop", value: "359031" },
    { label: "Hotel, motel, and resort desk clerk", value: "434081" },
    { label: "Human resources assistant, except payroll and timekeeping", value: "434161" },
    { label: "Human resources manager", value: "113121" },
    { label: "Human resources worker", value: "131070" },
    { label: "Industrial and refractory machinery mechanic", value: "49904X" },
    { label: "Industrial engineer, including health and safety", value: "172110" },
    { label: "Industrial production manager", value: "113051" },
    { label: "Industrial production manager", value: "113051" },
    { label: "Industrial truck and tractor operator", value: "537051" },
    { label: "Information and record clerk, other", value: "434199" },
    { label: "Information security analyst", value: "151212" },
    { label: "Inspector, tester, sorter, sampler, and weigher", value: "519061" },
    { label: "Insulation worker", value: "472130" },
    { label: "Insurance claims and policy processing clerk", value: "439041" },
    { label: "Insurance sales agent", value: "413021" },
    { label: "Insurance underwriter", value: "132053" },
    { label: "Interior designer", value: "271025" },
    { label: "Interpreter and translator", value: "273091" },
    { label: "Interviewer, except eligibility and loan", value: "434111" },
    { label: "Janitor and building cleaner", value: "37201X" },
    { label: "Jeweler and precious stone and metal worker", value: "519071" },
    { label: "Judge, magistrate, and other judicial worker", value: "231020" },
    { label: "Judicial law clerk", value: "231012" },
    { label: "Laborer and freight, stock, and material mover, hand", value: "537062" },
    { label: "Landscape architect", value: "171012" },
    { label: "Landscaping and groundskeeping worker", value: "373011" },
    { label: "Laundry and dry-cleaning worker", value: "516011" },
    { label: "Lawyer", value: "231011" },
    { label: "Legal secretary and administrative assistant", value: "436012" },
    { label: "Legal support worker, other", value: "232099" },
    { label: "Legislator", value: "111031" },
    { label: "Librarian and media collections specialist", value: "254022" },
    { label: "Library assistant, clerical", value: "434121" },
    { label: "Library technician", value: "254031" },
    { label: "Licensed practical and licensed vocational nurse", value: "292061" },
    { label: "Life scientist, other", value: "191099" },
    { label: "Loan interviewer and clerk", value: "434131" },
    { label: "Locksmith and safe repairer", value: "499094" },
    { label: "Locomotive engineer and operator", value: "534010" },
    { label: "Lodging manager", value: "119081" },
    { label: "Logging worker", value: "454020" },
    { label: "Logistician", value: "131081" },
    { label: "Machine feeder and offbearer", value: "537063" },
    { label: "Machinist", value: "514041" },
    { label: "Magnetic resonance imaging technologist", value: "292035" },
    { label: "Maids and housekeeping cleaner", value: "372012" },
    { label: "Mail clerk and mail machine operator, except postal service", value: "439051" },
    { label: "Maintenance and repair worker, general", value: "499071" },
    { label: "Maintenance worker, machinery", value: "499043" },
    { label: "Management analyst", value: "131111" },
    { label: "Manager, other", value: "119199" },
    { label: "Manicurist and pedicurist", value: "395092" },
    { label: "Manufactured building and mobile home installer", value: "499095" },
    { label: "Marine engineer and naval architect", value: "172121" },
    { label: "Market research analyst and marketing specialist", value: "131161" },
    { label: "Marketing manager", value: "112021" },
    { label: "Marriage and family therapist", value: "211013" },
    { label: "Massage therapist", value: "319011" },
    { label: "Materials engineer", value: "172131" },
    { label: "Mathematician", value: "152021" },
    { label: "Mechanical engineer", value: "172141" },
    { label: "Media and communication equipment worker, other", value: "274099" },
    { label: "Media and communication worker, other", value: "273099" },
    { label: "Medical and health services manager", value: "119111" },
    { label: "Medical assistant", value: "319092" },
    { label: "Medical records specialist", value: "292072" },
    { label: "Medical scientist", value: "191040" },
    { label: "Medical secretary and administrative assistant", value: "436013" },
    { label: "Medical transcriptionist", value: "319094" },
    { label: "Meeting, convention, and event planner", value: "131121" },
    { label: "Mental health and substance abuse social worker", value: "211023" },
    { label: "Mental health counselor", value: "211014" },
    { label: "Merchandise displayer and window trimmer", value: "271026" },
    { label: "Metal furnace operator, tender, pourer, and caster", value: "514050" },
    { label: "Meter reader, utilities", value: "435041" },
    { label: "Military enlisted tactical operations and air/weapons specialist and crew member", value: "553010" },
    { label: "Military officer special and tactical operations leader", value: "551010" },
    { label: "Military, rank not specified", value: "554010" },
    { label: "Millwright", value: "499044" },
    { label: "Mining and geological engineer, including mining safety engineer", value: "172151" },
    { label: "Miscellaneous agricultural worker", value: "452090" },
    { label: "Miscellaneous construction and related worker", value: "474090" },
    { label: "Miscellaneous health technologist and technician", value: "292090" },
    { label: "Miscellaneous plant and system operator", value: "518090" },
    { label: "Miscellaneous social scientist and related worker", value: "193090" },
    { label: "Miscellaneous vehicle and mobile equipment mechanic, installer, and repairer", value: "493090" }
  ]

  // const props = defineProps<{
  //   model: boolean;
  //   title: string;
  //   description:string;
  //   success:boolean
  // }>()
  // const open =ref(false)
  </script>

