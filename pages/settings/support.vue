<template>


          <div class="w-full flex flex-col items-start justify-start gap-y-10 sm:pr-10">

            <div class="flex flex-col gap-y-2 items-start">

              <h1 class="interSemiBold leading-none text-[16px] text-[#010109]">
                Help and support
              </h1>
              <h4 class="text-[12px] interRegular text-[#686767]">
                See frequently asked questions that can help answer questions you might have
              </h4>

            </div>


            <div class="w-full flex flex-col items-start justify-start gap-y-4">

              <h2
                  class="interSemiBold leading-none text-[16px] text-[#374151] select-none"
                >
                Frequently Asked Questions
              </h2>

              <div class="w-full flex flex-col gap-y-4 items-center justify-center">

                <Accordion :title="faq.title" :description="faq.description" v-for="(faq,index) in faqs" :key="index" />

              </div>

            </div>

          
          </div>


  </template>

  <script setup lang="ts">
  import { Toaster, toast } from 'vue-sonner'
  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/store/auth';
  const { getNotificationSetup, updateNotificationSetup } = useAuthStore();

  // const { loading, user, store, organisation } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

  definePageMeta({
    layout: 'settings'
  })

  const showLoader = ref(false)

  interface faq {
      title:string;
      description:string;
    }

  const faqs = ref<faq[]>([
    {
      title:'What is ParentCo, and how does it work?',
      description:' ParentCo is a digital platform designed to help modern parents stay connected, organized, and intentional about family life. It combines tools for communication, household management, and relationship-building, all in one place.'
    },
    {
      title:'Is ParentCo free to use?',
      description:'Yes! We offer a free tier with essential features like daily prompts, a shared folder, and basic task management. You can also try premium features free for 14 days before deciding to upgrade'
    },
    {
      title:'Can I invite my partner or other family members?',
      description:'Yes! ParentCo is built for collaboration. You can invite your partner and other household members to share prompts, manage tasks, and stay organized together.'
    },
    {
      title:'How do prompts work?',
      description:'Prompts are daily conversation starters designed to strengthen communication and connection between couples and families. You can respond directly in the app, revisit past prompts, and even nudge your partner if they haven’t answered.'
    },
    {
      title:'Is ParentCo available on mobile?',
      description:'Right now, ParentCo is a web-based app in its beta phase, but a mobile app is in development! You might notice occasional updates or improvements, and we’d love to hear your thoughts to shape the best experience for families!'
    },
    {
      title:'How is my data protected?',
      description:'We take privacy seriously. Your data is encrypted, never sold, and only shared with those you invite to your household. You’re in full control of your privacy settings.'
    },
    {
      title:'How do I get started?',
      description:'Sign up here, explore your first prompt, and set up your household tools. It only takes a few minutes to start making parenting more intentional!'
    },
    {
      title:'How can I share feedback or get support?',
      description:'We’d love to hear from you! You can reach us via: 📩 **Email**: hello@parentco.co'
    }
  ])

  
  
  </script>