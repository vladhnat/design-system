'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Header } from '@/components/ui/header';
import { Hero } from '@/components/ui/hero';
import { TextContentTitle } from '@/components/ui/text-content-title';
import { Section } from '@/components/ui/section';
import { Panel } from '@/components/ui/panel';
import { Flex, FlexItem } from '@/components/ui/flex';
import { TextContentHeading } from '@/components/ui/text-content-heading';
import { Card } from '@/components/ui/card';
import { TextHeading } from '@/components/ui/text-heading';
import { Text } from '@/components/ui/text';
import { ButtonGroup } from '@/components/ui/button-group';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/ui/footer';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Twitter, Mail, Youtube, Linkedin } from 'lucide-react';

// Placeholder image constant (using a placeholder service or localhost as mentioned in Figma)
const placeholderImage = 'http://localhost:3845/assets/10c13ac1a228a365cb98a0064b1d5afbc84887b2.png';

// Image component with fallback
function PlaceholderImage({ src, alt, aspectRatio = '1-1' }: { src: string; alt: string; aspectRatio?: '1-1' | '4-3' | '16-9' }) {
  const [imageError, setImageError] = useState(false);

  const aspectRatioClasses = {
    '1-1': 'aspect-square',
    '4-3': 'aspect-[4/3]',
    '16-9': 'aspect-video',
  };

  if (imageError) {
    return (
      <div className={cn("absolute inset-0 flex flex-col items-center justify-center gap-2 text-[#757575] bg-[#E3E3E3]", aspectRatioClasses[aspectRatio])}>
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

// Image wrapper component for Card asset prop
function CardImage({ src, alt, aspectRatio = '1-1' }: { src: string; alt: string; aspectRatio?: '1-1' | '4-3' | '16-9' }) {
  return <PlaceholderImage src={src} alt={alt} aspectRatio={aspectRatio} />;
}

export default function AboutPage() {
  return (
    <div className="bg-[#ffffff] min-h-screen flex flex-col">
      <Header
        logo="Brand"
        navItems={[
          { label: 'Products', href: '/products', active: true },
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
        <div className="container mx-auto px-4">
          <Panel type="half" gap="1200">
            <div className="relative w-full overflow-hidden rounded-lg bg-[#E3E3E3] aspect-[4/3]">
              <PlaceholderImage src={placeholderImage} alt="Always use image alt" aspectRatio="4-3" />
            </div>
            <div className="relative w-full overflow-hidden rounded-lg bg-[#E3E3E3] aspect-[4/3]">
              <PlaceholderImage src={placeholderImage} alt="Always use image alt" aspectRatio="4-3" />
            </div>
          </Panel>
        </div>
      </Section>

      <Section padding="1200">
        <Flex container gap="1200" direction="column" alignSecondary="stretch">
          <TextContentHeading heading="Heading" subheading="Subheading" />
          <FlexItem>
            <Flex wrap direction="column" gap="1200">
              <Card
                variant="stroke"
                direction="horizontal"
                asset={<CardImage src={placeholderImage} alt="Always use alt text" aspectRatio="1-1" />}
                className="gap-6 p-6 w-full"
              >
                <div className="flex flex-col gap-4 flex-1">
                  <TextHeading>Title</TextHeading>
                  <Text>Body text for whatever you&apos;d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</Text>
                  <ButtonGroup>
                    <Button variant="subtle">Button</Button>
                  </ButtonGroup>
                </div>
              </Card>

              <Card
                variant="stroke"
                direction="horizontal"
                asset={<CardImage src={placeholderImage} alt="Always use alt text" aspectRatio="1-1" />}
                className="gap-6 p-6 w-full"
              >
                <div className="flex flex-col gap-4 flex-1">
                  <TextHeading>Title</TextHeading>
                  <Text>Body text for whatever you&apos;d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</Text>
                  <ButtonGroup>
                    <Button variant="subtle">Button</Button>
                  </ButtonGroup>
                </div>
              </Card>

              <Card
                variant="stroke"
                direction="horizontal"
                asset={<CardImage src={placeholderImage} alt="Always use alt text" aspectRatio="1-1" />}
                className="gap-6 p-6 w-full"
              >
                <div className="flex flex-col gap-4 flex-1">
                  <TextHeading>Title</TextHeading>
                  <Text>Body text for whatever you&apos;d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</Text>
                  <ButtonGroup>
                    <Button variant="subtle">Button</Button>
                  </ButtonGroup>
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
              <Card
                variant="stroke"
                direction="vertical"
                asset={<CardImage src={placeholderImage} alt="Always use alt text" aspectRatio="1-1" />}
                className="overflow-hidden"
              >
                <div className="p-6 flex flex-col gap-4">
                  <TextHeading>Title</TextHeading>
                  <Text>Body text for whatever you&apos;d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</Text>
                </div>
              </Card>

              <Card
                variant="stroke"
                direction="vertical"
                asset={<CardImage src={placeholderImage} alt="Always use alt text" aspectRatio="1-1" />}
                className="overflow-hidden"
              >
                <div className="p-6 flex flex-col gap-4">
                  <TextHeading>Title</TextHeading>
                  <Text>Body text for whatever you&apos;d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</Text>
                </div>
              </Card>

              <Card
                variant="stroke"
                direction="vertical"
                asset={<CardImage src={placeholderImage} alt="Always use alt text" aspectRatio="1-1" />}
                className="overflow-hidden"
              >
                <div className="p-6 flex flex-col gap-4">
                  <TextHeading>Title</TextHeading>
                  <Text>Body text for whatever you&apos;d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</Text>
                </div>
              </Card>

              <Card
                variant="stroke"
                direction="vertical"
                asset={<CardImage src={placeholderImage} alt="Always use alt text" aspectRatio="1-1" />}
                className="overflow-hidden"
              >
                <div className="p-6 flex flex-col gap-4">
                  <TextHeading>Title</TextHeading>
                  <Text>Body text for whatever you&apos;d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</Text>
                </div>
              </Card>

              <Card
                variant="stroke"
                direction="vertical"
                asset={<CardImage src={placeholderImage} alt="Always use alt text" aspectRatio="1-1" />}
                className="overflow-hidden"
              >
                <div className="p-6 flex flex-col gap-4">
                  <TextHeading>Title</TextHeading>
                  <Text>Body text for whatever you&apos;d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</Text>
                </div>
              </Card>

              <Card
                variant="stroke"
                direction="vertical"
                asset={<CardImage src={placeholderImage} alt="Always use alt text" aspectRatio="1-1" />}
                className="overflow-hidden"
              >
                <div className="p-6 flex flex-col gap-4">
                  <TextHeading>Title</TextHeading>
                  <Text>Body text for whatever you&apos;d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</Text>
                </div>
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
          { label: 'Twitter', href: '/twitter', icon: <Twitter className="h-5 w-5" /> },
          { label: 'Email', href: '/email', icon: <Mail className="h-5 w-5" /> },
          { label: 'YouTube', href: '/youtube', icon: <Youtube className="h-5 w-5" /> },
          { label: 'LinkedIn', href: '/linkedin', icon: <Linkedin className="h-5 w-5" /> },
        ]}
      />
    </div>
  );
}

