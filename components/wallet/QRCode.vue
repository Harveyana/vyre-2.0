<template>
    <div class="w-full flex items-center justify-center" id="qr-code" ref="qrCode"></div>
  </template>
  
  <script setup lang="ts">
  import type {
    DrawType,
    TypeNumber,
    Mode,
    ErrorCorrectionLevel,
    DotType,
    CornerSquareType,
    CornerDotType,
    } from 'qr-code-styling';
    import QRCodeStyling from 'qr-code-styling';
  
  const props = defineProps({
    data: String
  });
  
  // Default options
  const options = {
      width: 140,
      height: 140,
      type: 'svg' as DrawType,
      data: props.data,
      image: '/vyreLogo.png',
      margin: 10,
      qrOptions: {
        typeNumber: 0 as TypeNumber,
        mode: 'Byte' as Mode,
        errorCorrectionLevel: 'Q' as ErrorCorrectionLevel
      },
      imageOptions: {
        hideBackgroundDots: false,
        imageSize: 2,
        margin: 5,
        crossOrigin: 'anonymous',
      },
      dotsOptions: {
        color: '#41b583',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 0,
        //   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
        // },
        type: 'rounded' as DotType
      },
      backgroundOptions: {
        color: '#ffffff',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 0,
        //   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
        // },
      }
  };
  
  const QRCODE = new QRCodeStyling(options);
  const qrCode = ref<HTMLElement | undefined>(undefined);

  
  onMounted(() => {
    // Append QR code to DOM element
    QRCODE.append(qrCode.value);
    // Add viewbox to make it resizable
    // qrCode.value!.firstChild!.setAttribute('viewBox', '0 0 300 300');
  });
  
//   watch(() => props.data, (newValue: string) => {
//     // Update QR code data when props change
//     options.data = newValue;
//     qrCodeStyling.update(options);
//     // Add viewbox to make it resizable
//     qrCode.value!.firstChild!.setAttribute('viewBox', '0 0 300 300');
//   });
  </script>
  
  <style scoped>
  svg{
    width: 100%;
    height:100%;
  }
  </style>