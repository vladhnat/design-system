'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Header } from '@/components/ui/header';
import { Hero } from '@/components/ui/hero';
import { TextContentTitle } from '@/components/ui/text-content-title';
import { Section } from '@/components/ui/section';
import { PanelImageDouble } from '@/components/ui/panel';
import { Flex, FlexItem } from '@/components/ui/flex';
import { TextContentHeading } from '@/components/ui/text-content-heading';
import { Card } from '@/components/ui/card';
import { CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ButtonGroup } from '@/components/ui/button-group';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/ui/footer';
import Image from 'next/image';

// Placeholder image constant (using a placeholder service or localhost as mentioned in Figma)
const placeholderImage = 'http://localhost:3845/assets/10c13ac1a228a365cb98a0064b1d5afbc84887b2.png';

// Image component with fallback
function PlaceholderImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[#757575] bg-[#E3E3E3]">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-sm font-normal">{alt || 'Image'}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      onError={() => setImageError(true)}
      unoptimized={src.startsWith('http')}
    />
  );
}

export default function AboutPage() {
  return (
    <div className="bg-[#ffffff] min-h-screen flex flex-col">
      <Header
        logo="Brand"
        navItems={[
          { label: 'Products', href: '/products' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Community', href: '/community' },
          { label: 'Resources', href: '/resources' },
          { label: 'Pricing', href: '/pricing' },
          { label: 'Contact', href: '/contact' },
          { label: 'Link', href: '/link' },
        ]}
        actions={
          <>
            <Button variant="subtle">Sign in</Button>
            <Button>Register</Button>
          </>
        }
      />

      <Hero variant="subtle">
        <TextContentTitle title="Title" subtitle="Subtitle" align="center" />
      </Hero>

      {/* Floating Back to Home Button */}
      <Link href="/">
        <Button
          variant="default"
          size="lg"
          className="fixed bottom-6 right-6 z-50 gap-2 shadow-lg hover:shadow-xl transition-shadow"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
      </Link>

      <Section padding="1600">
        <PanelImageDouble
          src1={placeholderImage}
          alt1="Always use image alt"
          src2={placeholderImage}
          alt2="Always use image alt"
          aspectRatio="4-3"
        />
      </Section>

      <Section padding="1200">
        <Flex container gap="1200" direction="column" alignSecondary="stretch">
          <TextContentHeading heading="Heading" subheading="Subheading" />
          <FlexItem>
            <Flex wrap direction="column" gap="1200">
              <Card variant="stroke" direction="horizontal" className="gap-4 p-4">
                <div className="relative w-24 h-24 flex-shrink-0 rounded-lg bg-[#E3E3E3] overflow-hidden">
                  <PlaceholderImage src={placeholderImage} alt="Always use alt text" />
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <CardTitle className="text-xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1e1e1e] font-[Inter] p-0">
                    Title
                  </CardTitle>
                  <CardContent className="p-0">
                    <p className="text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]">
                      Body text for whatever you&apos;d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
                    </p>
                  </CardContent>
                  <CardFooter className="p-0">
                    <ButtonGroup>
                      <Button variant="subtle">Button</Button>
                    </ButtonGroup>
                  </CardFooter>
                </div>
              </Card>

              <Card variant="stroke" direction="horizontal" className="gap-4 p-4">
                <div className="relative w-24 h-24 flex-shrink-0 rounded-lg bg-[#E3E3E3] overflow-hidden">
                  <PlaceholderImage src={placeholderImage} alt="Always use alt text" />
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <CardTitle className="text-xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1e1e1e] font-[Inter] p-0">
                    Title
                  </CardTitle>
                  <CardContent className="p-0">
                    <p className="text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]">
                      Body text for whatever you&apos;d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
                    </p>
                  </CardContent>
                  <CardFooter className="p-0">
                    <ButtonGroup>
                      <Button variant="subtle">Button</Button>
                    </ButtonGroup>
                  </CardFooter>
                </div>
              </Card>

              <Card variant="stroke" direction="horizontal" className="gap-4 p-4">
                <div className="relative w-24 h-24 flex-shrink-0 rounded-lg bg-[#E3E3E3] overflow-hidden">
                  <PlaceholderImage src={placeholderImage} alt="Always use alt text" />
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <CardTitle className="text-xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1e1e1e] font-[Inter] p-0">
                    Title
                  </CardTitle>
                  <CardContent className="p-0">
                    <p className="text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]">
                      Body text for whatever you&apos;d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
                    </p>
                  </CardContent>
                  <CardFooter className="p-0">
                    <ButtonGroup>
                      <Button variant="subtle">Button</Button>
                    </ButtonGroup>
                  </CardFooter>
                </div>
              </Card>
            </Flex>
          </FlexItem>
        </Flex>
      </Section>

      <Section padding="1200">
        <Flex container gap="1200" direction="column" alignSecondary="stretch">
          <TextContentHeading heading="Heading" subheading="Subheading" />
          <FlexItem>
            <Flex wrap type="third" gap="1200">
              <Card variant="stroke" direction="vertical" className="overflow-hidden">
                <div className="relative w-full aspect-square bg-[#E3E3E3] overflow-hidden">
                  <PlaceholderImage src={placeholderImage} alt="Always use alt text" />
                </div>
                <CardContent className="p-4">
                  <CardTitle className="text-xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1e1e1e] font-[Inter] mb-2">
                    Title
                  </CardTitle>
                  <p className="text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]">
                    Body text for whatever you&apos;d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
                  </p>
                </CardContent>
              </Card>

              <Card variant="stroke" direction="vertical" className="overflow-hidden">
                <div className="relative w-full aspect-square bg-[#E3E3E3] overflow-hidden">
                  <PlaceholderImage src={placeholderImage} alt="Always use alt text" />
                </div>
                <CardContent className="p-4">
                  <CardTitle className="text-xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1e1e1e] font-[Inter] mb-2">
                    Title
                  </CardTitle>
                  <p className="text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]">
                    Body text for whatever you&apos;d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
                  </p>
                </CardContent>
              </Card>

              <Card variant="stroke" direction="vertical" className="overflow-hidden">
                <div className="relative w-full aspect-square bg-[#E3E3E3] overflow-hidden">
                  <PlaceholderImage src={placeholderImage} alt="Always use alt text" />
                </div>
                <CardContent className="p-4">
                  <CardTitle className="text-xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1e1e1e] font-[Inter] mb-2">
                    Title
                  </CardTitle>
                  <p className="text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]">
                    Body text for whatever you&apos;d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
                  </p>
                </CardContent>
              </Card>

              <Card variant="stroke" direction="vertical" className="overflow-hidden">
                <div className="relative w-full aspect-square bg-[#E3E3E3] overflow-hidden">
                  <PlaceholderImage src={placeholderImage} alt="Always use alt text" />
                </div>
                <CardContent className="p-4">
                  <CardTitle className="text-xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1e1e1e] font-[Inter] mb-2">
                    Title
                  </CardTitle>
                  <p className="text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]">
                    Body text for whatever you&apos;d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
                  </p>
                </CardContent>
              </Card>

              <Card variant="stroke" direction="vertical" className="overflow-hidden">
                <div className="relative w-full aspect-square bg-[#E3E3E3] overflow-hidden">
                  <PlaceholderImage src={placeholderImage} alt="Always use alt text" />
                </div>
                <CardContent className="p-4">
                  <CardTitle className="text-xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1e1e1e] font-[Inter] mb-2">
                    Title
                  </CardTitle>
                  <p className="text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]">
                    Body text for whatever you&apos;d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
                  </p>
                </CardContent>
              </Card>

              <Card variant="stroke" direction="vertical" className="overflow-hidden">
                <div className="relative w-full aspect-square bg-[#E3E3E3] overflow-hidden">
                  <PlaceholderImage src={placeholderImage} alt="Always use alt text" />
                </div>
                <CardContent className="p-4">
                  <CardTitle className="text-xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1e1e1e] font-[Inter] mb-2">
                    Title
                  </CardTitle>
                  <p className="text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]">
                    Body text for whatever you&apos;d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
                  </p>
                </CardContent>
              </Card>
            </Flex>
          </FlexItem>
        </Flex>
      </Section>

      <Footer
        logo="Brand"
        columns={[
          {
            title: 'Use cases',
            links: [
              { label: 'UI design', href: '/ui-design' },
              { label: 'UX design', href: '/ux-design' },
              { label: 'Wireframing', href: '/wireframing' },
              { label: 'Diagramming', href: '/diagramming' },
              { label: 'Brainstorming', href: '/brainstorming' },
              { label: 'Online whiteboard', href: '/whiteboard' },
              { label: 'Team collaboration', href: '/collaboration' },
            ],
          },
          {
            title: 'Explore',
            links: [
              { label: 'Design', href: '/design' },
              { label: 'Prototyping', href: '/prototyping' },
              { label: 'Development features', href: '/development' },
              { label: 'Design systems', href: '/design-systems' },
              { label: 'Collaboration features', href: '/collaboration-features' },
              { label: 'Design process', href: '/design-process' },
              { label: 'Figma', href: '/figma' },
            ],
          },
          {
            title: 'Resources',
            links: [
              { label: 'Blog', href: '/blog' },
              { label: 'Best practices', href: '/best-practices' },
              { label: 'Colors', href: '/colors' },
              { label: 'Color wheel', href: '/color-wheel' },
              { label: 'Support', href: '/support' },
              { label: 'Developers', href: '/developers' },
              { label: 'Resource library', href: '/resources' },
            ],
          },
        ]}
        socialLinks={[
          { label: 'Twitter', href: '/twitter' },
          { label: 'Email', href: '/email' },
          { label: 'YouTube', href: '/youtube' },
          { label: 'LinkedIn', href: '/linkedin' },
        ]}
      />
    </div>
  );
}

