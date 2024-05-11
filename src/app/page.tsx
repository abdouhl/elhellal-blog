'use client'


import Link from "next/link";
import { usePathname } from 'next/navigation'
import { Box, Card, Inset, Text, Strong, Flex, AspectRatio,Separator } from '@radix-ui/themes';

import { Header } from './components/header';

export default function Home() {
  const pathname = usePathname()
  //<Header isHome={true} />
  return (
    
    <main className="flex min-h-screen flex-col items-center">
      <Header isHome={true} />
      {/* <p>
        محاولات الواقعة الخارجية حين أم, لها مساعدة الحدود عن, فشكّل الولايات لكل إذ. أي هُزم مليارات التخطيط يبق. دون وقام فشكّل وانتهاءً إذ. تحرّك الهادي سنغافورة ضرب هو. بعض تجهيز الصفحة الأرضية أي.

تحت عجّل مسارح الولايات لم, نهاية الحكومة ٣٠ كان, بل يتسنّى الوراء وتم. تم عرض أدنى انذار. قد حين هُزم إبّان طوكيو. أم وقرى انتباه يبق, فاتّبع وسمّيت وبالتحديد، بلا عن. مع أضف نقطة يعادل. ودول بالتوقيع عن لان, فعل دارت وسوء المؤلّفة بـ, كلا أن العالم للحكومة.

أهّل تشكيل في عدم, كل كان أوروبا الثقيل, الأول الخاصّة الربيع، كل بحق. إحتار وتتحمّل أم الا, إذ دنو الفترة الأثنان. لان عُقر أصقاع ما. ميناء الشطر تكاليف ثم ولم.

من حيث واُسدل إتفاقية الحكومة. بفرض اتفاق فرنسية أن دار. ضرب أعمال تحرّكت اوروبا إذ, شرسة الصفحة بـ لمّ. قامت التبرعات فصل قد. به، مشارف المضي من, مارد للجزر بتخصيص حول بـ, لمّ مع كانتا النزاع العالم،.

هذه من الهادي شموليةً, المدن المسرح عل مكن. شمال ليركز الأمريكي نفس لم, بـ ميناء طوكيو الأولية قبل. ان ماشاء فشكّل الأسيوي ضرب. ان وإيطالي التاريخ، حول, دفّة بالعمل هو كلا. وترك الأخذ مدن في, فمرّ ارتكبها المتساقطة، تلك قد, الا مئات الإحتفاظ تم.

بل وتزويده التقليدي دار, إذ وبدون تعديل وفنلندا كان, ليرتفع الشهيرة قد فصل. الا تم مقاومة الثقيل. سياسة عسكرياً الأوروبيّون قد لان, مكن أم ثانية مدينة وبعدما. الوراء اوروبا وهولندا، أن نفس, ما تونس وترك اليابانية فقد. جيما وجزر ٣٠ مدن, وتم أي هنا؟ وقام كانتا.

بـ أحكم نتيجة الى, أي كلا حقول الإثنان, هذه ان أحدث الأمور الشمال. لعملة بالجانب التجارية بعد أي. جورج الاندونيسية مع كلّ. ما الحرة التقليدي مما. حلّت العالمي المنتصر ضرب عل, أي لكون معاملة وصافرات جعل. لم مدن لكون أفاق الإمداد. مع وزارة يتمكن ومطالبة بعد.

تعد بشكل جورج كل, ان لان الحكومة ماليزيا،. بها تم وبعدما ومطالبة. تلك و منتصف الأمريكية, والتي العاصمة أم انه, بعد ليركز اعتداء المواد أم. شيء إبّان اتفاقية كل, أخذ بـ سابق الشمال لإنعدام. بـ فصل أخرى واشتدّت الولايات, بل وترك الأولية مدن.

إستعمل عسكرياً ما فعل. هذا وبعد بالحرب إذ, مع دنو وكسبت مكثّفة. وصافرات التقليدي ضرب قد, واستمر العالم، نفس ما. عشوائية الانجليزية ٣٠ ضرب.

قبل و اتّجة وبالرغم الصعداء. أضف شرسة وتنامت المبرمة أي. ضرب شعار مشروط الجديدة، مع. بعض تم معقل جزيرتي, تحت خلاف دأبوا بـ. لمحاكم ليتسنّى البولندي في ذلك, كلّ بـ مئات أعمال. دون تاريخ وبغطاء الوراء مع, لم الصفحات بمعارضة فصل.
      </p>
      <div className="flex gap-2 md:gap-8 relative w-full container mx-auto  p-2 md:p-4 2xl:px-10">
        <Box maxWidth="240px">
          <Card size="2">
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: 140,
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            </Inset>
            <Text as="p" size="3">
              <Strong>Typography</Strong> is the art and technique of arranging type to
              make written language legible, readable and appealing when displayed.
            </Text>
          </Card>
        </Box>
        <Box className="h-full" >
          <Card size="2">
          <Flex>
            <Inset clip="padding-box" side="right" pl="current">
              <img
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: 250,
                  height: '100%',
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            </Inset>
            <Text as="p" >
              <Strong>Typography</Strong> is the art and technique of arranging type to
              make written language legible, readable and appealing when displayed.
            </Text>
            </Flex>
          </Card>
        </Box>
      </div> */}

<div className="grid grid-rows-5 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4 w-full max-w-screen-lg p-3 lg:p-4">
    <Box className="col-span-2 row-span-2 mb-2">
          <Card size="2" className="h-full">
            <Inset clip="padding-box" side="top" pb="current">
            <AspectRatio ratio={16 / 8}><img
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'var(--gray-5)',
                }}
              /></AspectRatio>
            </Inset>
            <Text as="p" size="3">
              <Strong>Typography</Strong> is the art and technique of arranging type to
              make written language legible, readable and appealing when displayed.
            </Text>
          </Card>
        </Box>
    <Box className="hidden md:block md:col-span-2 md:col-start-3" >
          <Card size="2" className="h-full">
          <Flex className="h-full">
            <Inset clip="padding-box" side="right" pl="current" className="basis-2/4">
            <img
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            </Inset>
            <Text as="p" className="basis-2/4" >
              <Strong>Typography</Strong> is the art and technique of arranging type to
              make written language legible, readable and appealing when displayed.
            </Text>
            </Flex>
          </Card>
        </Box>
      <Box className="hidden lg:block lg:row-span-2 lg:col-start-5 mb-2">
          <Card size="2" className="h-full">
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: 140,
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            </Inset>
            <Text as="p" size="3">
              <Strong>Typography</Strong> is the art and technique of arranging type to
              make written language legible, readable and appealing when displayed.
            </Text>
          </Card>
        </Box>
    <Box className="hidden md:block md:row-span-2 md:col-start-3 md:row-start-2">
          <Card size="2" className="h-full">
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: 140,
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            </Inset>
            <Text as="p" size="3">
              <Strong>Typography</Strong> is the art and technique of arranging type to
              make written language legible, readable and appealing when displayed.
            </Text>
          </Card>
        </Box>
    <Box className="hidden md:block md:row-span-2 md:col-start-4 md:row-start-2">
          <Card size="2" className="h-full">
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: 140,
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            </Inset>
            <Text as="p" size="3">
              <Strong>Typography</Strong> is the art and technique of arranging type to
              make written language legible, readable and appealing when displayed.
            </Text>
          </Card>
        </Box>
    <Box className="col-span-2 row-start-3" >
          <Card size="2" className="h-full">
          <Flex className="h-full">
            <Inset clip="padding-box" side="right" pl="current">
              <img
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: 600,
                  height: '100%',
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            </Inset>
            <Text as="p" >
              <Strong>Typography</Strong> is the art and technique of arranging type to
              make written language legible, readable and appealing when displayed.
            </Text>
            </Flex>
          </Card>
        </Box>
    <Box className="hidden lg:block lg:row-span-3 lg:col-start-5 lg:row-start-3">
          <Card size="2" className="h-full">
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: 140,
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            </Inset>
            <Text as="p" size="3">
              <Strong>Typography</Strong> is the art and technique of arranging type to
              make written language legible, readable and appealing when displayed.
            </Text>
          </Card>
        </Box>
    <Box className="hidden md:block md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-4">
          <Card size="2" className="h-full">
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: 140,
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            </Inset>
            <Text as="p" size="3">
              <Strong>Typography</Strong> is the art and technique of arranging type to
              make written language legible, readable and appealing when displayed.
            </Text>
          </Card>
        </Box>
    <Box className="row-span-2 col-start-1 row-start-4">
          <Card size="2" className="h-full">
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: 140,
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            </Inset>
            <Text as="p" size="3">
              <Strong>Typography</Strong> is the art and technique of arranging type to
              make written language legible, readable and appealing when displayed.
            </Text>
          </Card>
        </Box>
    <Box className="row-span-2 col-start-2 row-start-4">
          <Card size="2" className="h-full">
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: 140,
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            </Inset>
            <Text as="p" size="3">
              <Strong>Typography</Strong> is the art and technique of arranging type to
              make written language legible, readable and appealing when displayed.
            </Text>
          </Card>
        </Box>
</div>

<Separator className="w-full max-w-screen-lg m-3 lg:m-4" />    

<div className="flex flex-row flex-wrap w-full max-w-screen-lg gap-3 lg:gap-4 p-3 lg:p-4">
<Box className="basis-2/2 md:basis-2/5 grow" >
          <Card size="2" className="h-full">
          <Flex className="h-full">
            <Inset clip="padding-box" side="right" pl="current" className="basis-2/4">
            <img
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            </Inset>
            <Text as="p" className="basis-2/4" >
              <Strong>Typography</Strong> is the art and technique of arranging type to
              make written language legible, readable and appealing when displayed.
            </Text>
            </Flex>
          </Card>
        </Box>
        <Box className="basis-2/2 md:basis-2/5 grow" >
          <Card size="2" className="h-full">
          <Flex className="h-full">
            <Inset clip="padding-box" side="right" pl="current" className="basis-2/4">
            <img
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            </Inset>
            <Text as="p" className="basis-2/4" >
              <Strong>Typography</Strong> is the art and technique of arranging type to
              make written language legible, readable and appealing when displayed.
            </Text>
            </Flex>
          </Card>
        </Box>
        <Box className="basis-2/2 md:basis-2/5 grow" >
          <Card size="2" className="h-full">
          <Flex className="h-full">
            <Inset clip="padding-box" side="right" pl="current" className="basis-2/4">
            <img
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            </Inset>
            <Text as="p" className="basis-2/4" >
              <Strong>Typography</Strong> is the art and technique of arranging type to
              make written language legible, readable and appealing when displayed.
            </Text>
            </Flex>
          </Card>
        </Box>
        <Box className="basis-2/2 md:basis-2/5 grow" >
          <Card size="2" className="h-full">
          <Flex className="h-full">
            <Inset clip="padding-box" side="right" pl="current" className="basis-2/4">
            <img
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            </Inset>
            <Text as="p" className="basis-2/4" >
              <Strong>Typography</Strong> is the art and technique of arranging type to
              make written language legible, readable and appealing when displayed.
            </Text>
            </Flex>
          </Card>
        </Box>
</div>

</main>
  );
}
