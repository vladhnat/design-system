'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { FormBox } from '@/components/ui/form-box';
import { InputField } from '@/components/ui/input-field';
import { TextareaField } from '@/components/ui/textarea-field';
import { CheckboxField } from '@/components/ui/checkbox-field';
import { SelectField } from '@/components/ui/select-field';
import { TextLink } from '@/components/ui/text-link';
import { Form } from '@/components/ui/form';
import { ButtonGroup } from '@/components/ui/button-group';
import { Calendar } from '@/components/ui/calendar';
import { AiChatBox } from '@/components/ui/ai-chat-box';
import { AvatarBlock } from '@/components/ui/avatar-block';
import { AvatarGroup } from '@/components/ui/avatar-group';
import { Section } from '@/components/ui/section';
import { Flex, FlexItem } from '@/components/ui/flex';
import { TextContentHeading } from '@/components/ui/text-content-heading';
import { TextContentTitle } from '@/components/ui/text-content-title';
import { TextHeading } from '@/components/ui/text-heading';
import { Text } from '@/components/ui/text';
import { Header } from '@/components/ui/header';
import { HeaderAuth } from '@/components/ui/header-auth';
import { Footer } from '@/components/ui/footer';
import { Hero, HeroActions, HeroForm, HeroNewsletter } from '@/components/ui/hero';
import { Panel, PanelImage, PanelImageContent, PanelImageDouble } from '@/components/ui/panel';
import { Tag } from '@/components/ui/tag';
import { TagToggleGroup } from '@/components/ui/tag-toggle-group';
import { CheckboxGroup } from '@/components/ui/checkbox-group';
import { Navigation, NavigationPill } from '@/components/ui/navigation';
import { ReviewCard } from '@/components/ui/review-card';
import { ProductInfoCard } from '@/components/ui/product-info-card';
import { PricingCard } from '@/components/ui/pricing-card';
import { StatsCard } from '@/components/ui/stats-card';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { DateInputField } from '@/components/ui/date-input-field';
import { DatePickerField } from '@/components/ui/date-picker-field';
import { Search } from '@/components/ui/search';
import { RadioField } from '@/components/ui/radio-field';
import { SliderField } from '@/components/ui/slider-field';
import { SwitchField } from '@/components/ui/switch-field';
import { AiSidebar } from '@/components/ui/ai-sidebar';
import { AiConversation } from '@/components/ui/ai-conversation';
import {
  AlertCircle,
  CheckCircle2,
  Info,
  Sparkles,
  Settings,
  User,
  Mail,
  MoreVertical,
  Download,
  Copy,
  Edit,
  Trash2,
  HelpCircle,
  Package,
  Bot,
  Code,
  Star,
  TrendingUp,
  FileText,
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [progress, setProgress] = useState(33);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 pt-24 max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
              <h1 className="text-5xl font-bold tracking-tight">
                Design System
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              A comprehensive component library built with shadcn/ui and
              Tailwind CSS
            </p>
            <ButtonGroup align="center" className="gap-4">
              <Link href="/products">
                <Button size="lg" className="gap-2">
                  <Package className="h-5 w-5" />
                  View Product Management
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="subtle" className="gap-2">
                  <FileText className="h-5 w-5" />
                  View About Page
                </Button>
              </Link>
            </ButtonGroup>
          </div>

          {/* Buttons Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Buttons</h2>
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription>
                  Different button styles and sizes for various use cases
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button variant="subtle">Subtle</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">
                    <CheckCircle2 />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Form Elements Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Form Elements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Inputs & Labels</CardTitle>
                  <CardDescription>Text inputs and labels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="textarea">Message</Label>
                    <Textarea
                      id="textarea"
                      placeholder="Type your message here..."
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Select & Checkboxes</CardTitle>
                  <CardDescription>Selection components</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Select an option</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a fruit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="orange">Orange</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="cursor-pointer">
                      Accept terms and conditions
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="notifications"
                      checked={switchChecked}
                      onCheckedChange={setSwitchChecked}
                    />
                    <Label htmlFor="notifications" className="cursor-pointer">
                      Enable notifications
                    </Label>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Forms Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Forms</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Form</CardTitle>
                  <CardDescription>FormBox with InputField and TextareaField</CardDescription>
                </CardHeader>
                <CardContent>
                  <FormBox onSubmit={(e) => console.log('Contact form submitted')}>
                    <InputField label="Name" placeholder="Value" />
                    <InputField label="Surname" placeholder="Value" />
                    <InputField label="Email" placeholder="Value" />
                    <TextareaField label="Message" placeholder="Value" />
                    <ButtonGroup align="justify">
                      <Button variant="default">Submit</Button>
                    </ButtonGroup>
                  </FormBox>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Login Form</CardTitle>
                  <CardDescription>FormBox with InputField and TextLink</CardDescription>
                </CardHeader>
                <CardContent>
                  <FormBox onSubmit={(e) => console.log('Login form submitted')}>
                    <InputField label="Email" placeholder="Value" />
                    <InputField label="Password" placeholder="Value" type="password" />
                    <ButtonGroup align="justify">
                      <Button variant="default">Sign In</Button>
                    </ButtonGroup>
                    <TextLink href="#">Forgot password?</TextLink>
                  </FormBox>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Register Form</CardTitle>
                  <CardDescription>FormBox with CheckboxField</CardDescription>
                </CardHeader>
                <CardContent>
                  <FormBox onSubmit={(e) => console.log('Register form submitted')}>
                    <InputField label="Email" placeholder="Value" />
                    <InputField label="Password" placeholder="Value" type="password" />
                    <CheckboxField label="Label" description="Description" defaultChecked />
                    <ButtonGroup align="justify">
                      <Button variant="default">Register</Button>
                    </ButtonGroup>
                  </FormBox>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Forgot Password Form</CardTitle>
                  <CardDescription>FormBox with ButtonGroup</CardDescription>
                </CardHeader>
                <CardContent>
                  <FormBox onSubmit={(e) => console.log('Forgot password form submitted')}>
                    <InputField label="Email" placeholder="Value" />
                    <ButtonGroup align="center">
                      <Button variant="subtle">Cancel</Button>
                      <Button variant="default">Reset Password</Button>
                    </ButtonGroup>
                  </FormBox>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Shipping Form</CardTitle>
                  <CardDescription>FormBox with SelectField and TextareaField</CardDescription>
                </CardHeader>
                <CardContent>
                  <FormBox onSubmit={(e) => console.log('Shipping form submitted')}>
                    <Text>We ship within 2 working days</Text>
                    <InputField label="Full Name" placeholder="Value" />
                    <SelectField label="Location" placeholder="I am a placeholder...">
                      <SelectItem value="value">Value</SelectItem>
                      <SelectItem value="option-2">Option 2</SelectItem>
                      <SelectItem value="option-3">Option 3</SelectItem>
                      <SelectItem value="option-4">Option 4</SelectItem>
                      <SelectItem value="option-5">Option 5</SelectItem>
                    </SelectField>
                    <TextareaField label="Delivery note" placeholder="Value" />
                    <CheckboxField label="I accept the terms" description="Read our T&Cs" defaultChecked />
                    <ButtonGroup align="justify">
                      <Button variant="default">Save shipping information</Button>
                    </ButtonGroup>
                  </FormBox>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Newsletter Form</CardTitle>
                  <CardDescription>Single-line Form with Input and Button</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form singleLine onSubmit={(e) => console.log('Newsletter form submitted')}>
                    <Input
                      defaultValue="you@example.com"
                      placeholder="you@example.com"
                      className="flex-1 rounded-l-lg rounded-r-none border-r-0"
                    />
                    <Button variant="default" className="rounded-r-lg rounded-l-none">
                      Submit
                    </Button>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Calendar Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Calendar</h2>
            <Card>
              <CardHeader>
                <CardTitle>Date Picker</CardTitle>
                <CardDescription>Calendar component with month and year selection</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <Calendar />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* AI Chat Box Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">AI Chat Box</h2>
            <Card>
              <CardHeader>
                <CardTitle>Chat Input</CardTitle>
                <CardDescription>AI chat box with icon buttons and send button</CardDescription>
              </CardHeader>
              <CardContent>
                <AiChatBox
                  placeholder="What would you like to know?"
                  onSendClick={() => console.log('Send clicked')}
                />
              </CardContent>
            </Card>
          </section>

          {/* Avatar Components Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Avatar Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Avatar Block</CardTitle>
                  <CardDescription>Avatar with title and description</CardDescription>
                </CardHeader>
                <CardContent>
                  <AvatarBlock
                    title="Title"
                    description="Description"
                    src="https://github.com/shadcn.png"
                    fallback="JD"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Avatar Group</CardTitle>
                  <CardDescription>Grouped avatars with max count</CardDescription>
                </CardHeader>
                <CardContent>
                  <AvatarGroup spacing="100" max={3}>
                    <Avatar size="large">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar size="large">
                      <AvatarImage src="https://github.com/vercel.png" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <Avatar size="large">
                      <AvatarImage src="https://github.com/nextjs.png" />
                      <AvatarFallback>NJ</AvatarFallback>
                    </Avatar>
                    <Avatar size="large">
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <Avatar size="large">
                      <AvatarFallback>CD</AvatarFallback>
                    </Avatar>
                  </AvatarGroup>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Radio Group Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Radio Group</h2>
            <Card>
              <CardHeader>
                <CardTitle>Select an Option</CardTitle>
                <CardDescription>
                  Choose one option from the list
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="option-one">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one" className="cursor-pointer">
                      Option One
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two" className="cursor-pointer">
                      Option Two
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-three" id="option-three" />
                    <Label htmlFor="option-three" className="cursor-pointer">
                      Option Three
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </section>

          {/* Tabs Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Tabs</h2>
            <Card>
              <CardHeader>
                <CardTitle>Tabbed Content</CardTitle>
                <CardDescription>Organize content into tabs</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="account" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Account</CardTitle>
                        <CardDescription>
                          Make changes to your account here.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" defaultValue="John Doe" />
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="password" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Password</CardTitle>
                        <CardDescription>
                          Change your password here.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <Label htmlFor="current">Current password</Label>
                          <Input id="current" type="password" />
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="settings" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Settings</CardTitle>
                        <CardDescription>
                          Manage your settings here.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center space-x-2">
                          <Switch id="dark-mode" />
                          <Label htmlFor="dark-mode" className="cursor-pointer">
                            Dark mode
                          </Label>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>

          {/* Accordion Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Accordion</h2>
            <Card>
              <CardHeader>
                <CardTitle>Collapsible Content</CardTitle>
                <CardDescription>
                  Expand and collapse sections of content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern and is
                      fully keyboard accessible. All components are built with
                      accessibility in mind.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It comes with default styles that match the other
                      components&apos; aesthetic. You can customize it using
                      Tailwind CSS classes.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It includes smooth animations for opening and closing
                      states. The animations are built using CSS transitions and
                      are performant.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      Can I use multiple items?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. You can configure the accordion to allow multiple
                      items to be open at once, or restrict it to a single open
                      item. The behavior is fully customizable.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </section>

          {/* Cards Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description goes here</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This is the card content area. You can put any content here.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">
                    Action
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Another Card</CardTitle>
                  <CardDescription>With different content</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Cards are great for organizing content into digestible
                    sections.
                  </p>
                </CardContent>
                <CardFooter className="justify-between">
                  <Button variant="ghost" size="sm">
                    Cancel
                  </Button>
                  <Button size="sm">Confirm</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Feature Card</CardTitle>
                  <CardDescription>
                    Highlight important features
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm">Feature one</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm">Feature two</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm">Feature three</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Badges Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Badges</h2>
            <Card>
              <CardHeader>
                <CardTitle>Badge Variants</CardTitle>
                <CardDescription>
                  Use badges to highlight status, categories, or labels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge className="bg-green-500 text-white hover:bg-green-600">
                    Custom
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Alerts Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Alerts</h2>
            <div className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>
                  This is an informational alert. Use it to provide helpful
                  context or additional information to users.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  This is a destructive alert. Use it to display error messages
                  or warnings that require immediate attention.
                </AlertDescription>
              </Alert>

              <Alert className="border-green-500 bg-green-50 dark:bg-green-950">
                <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                <AlertTitle className="text-green-800 dark:text-green-200">
                  Success
                </AlertTitle>
                <AlertDescription className="text-green-700 dark:text-green-300">
                  This is a success alert. Use it to confirm successful actions
                  or positive feedback.
                </AlertDescription>
              </Alert>
            </div>
          </section>

          {/* Dialog Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Dialog</h2>
            <Card>
              <CardHeader>
                <CardTitle>Modal Dialogs</CardTitle>
                <CardDescription>Open dialogs and modals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button variant="outline">Cancel</Button>
                        <Button variant="destructive">Delete</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Dropdown Menu Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Dropdown Menu</h2>
            <Card>
              <CardHeader>
                <CardTitle>Dropdown Menus</CardTitle>
                <CardDescription>Context menus and dropdowns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">Open Menu</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Mail className="mr-2 h-4 w-4" />
                        <span>Messages</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <span>Log out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Copy className="mr-2 h-4 w-4" />
                        <span>Copy</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        <span>Edit</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        <span>Download</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Progress & Skeleton Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Progress & Skeleton</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Progress Bar</CardTitle>
                  <CardDescription>
                    Show loading or completion status
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Progress value={progress} />
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => setProgress(Math.max(0, progress - 25))}
                    >
                      Decrease
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => setProgress(Math.min(100, progress + 25))}
                    >
                      Increase
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Skeleton Loaders</CardTitle>
                  <CardDescription>
                    Placeholder content while loading
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/6" />
                  </div>
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Slider Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Slider</h2>
            <Card>
              <CardHeader>
                <CardTitle>Range Slider</CardTitle>
                <CardDescription>
                  Select a value from a range using a slider
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Volume</Label>
                    <span className="text-sm text-muted-foreground">
                      {sliderValue[0]}%
                    </span>
                  </div>
                  <Slider
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    max={100}
                    step={1}
                  />
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Brightness</Label>
                    <span className="text-sm text-muted-foreground">50%</span>
                  </div>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Disabled Slider</Label>
                    <span className="text-sm text-muted-foreground">25%</span>
                  </div>
                  <Slider defaultValue={[25]} max={100} step={1} disabled />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Separator Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Separator</h2>
            <Card>
              <CardHeader>
                <CardTitle>Visual Separators</CardTitle>
                <CardDescription>Divide content sections</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium">Radix Primitives</h4>
                    <p className="text-sm text-muted-foreground">
                      An open-source UI component library.
                    </p>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex h-5 items-center space-x-4 text-sm">
                    <div>Blog</div>
                    <Separator orientation="vertical" />
                    <div>Docs</div>
                    <Separator orientation="vertical" />
                    <div>Source</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Tooltip Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Tooltip</h2>
            <Card>
              <CardHeader>
                <CardTitle>Tooltips</CardTitle>
                <CardDescription>
                  Display helpful information on hover or focus
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-8">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Hover me</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a tooltip</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <HelpCircle className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Click for help</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge variant="outline" className="cursor-help">
                        Hover badge
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This badge has a tooltip</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="inline-flex items-center gap-2 cursor-help">
                        <span>Info</span>
                        <Info className="h-4 w-4" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p>Tooltip on top</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="inline-flex items-center gap-2 cursor-help">
                        <span>Right</span>
                        <Settings className="h-4 w-4" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>Tooltip on the right side</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="inline-flex items-center gap-2 cursor-help">
                        <span>Left</span>
                        <User className="h-4 w-4" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                      <p>Tooltip on the left side</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Combined Example */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Combined Example</h2>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>User Profile</CardTitle>
                    <CardDescription>
                      Manage your account settings
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">Active</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="text-lg">JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-sm text-muted-foreground">
                      john.doe@example.com
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label htmlFor="full-name">Full Name</Label>
                  <Input id="full-name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-address">Email Address</Label>
                  <Input
                    type="email"
                    id="email-address"
                    placeholder="john@example.com"
                  />
                </div>
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    Your email address will be used for account verification and
                    important notifications.
                  </AlertDescription>
                </Alert>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="two-factor">
                      Two-factor authentication
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security
                    </p>
                  </div>
                  <Switch id="two-factor" />
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </section>

          {/* Typography Components Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Typography Components</h2>
            <Card>
              <CardHeader>
                <CardTitle>TextHeading and Text</CardTitle>
                <CardDescription>
                  Typography components for card titles and body text
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <TextHeading>Card Title Example</TextHeading>
                  <Text>
                    This is body text using the Text component. It provides consistent
                    typography styling for body content throughout the design system.
                  </Text>
                </div>
                <div className="space-y-4">
                  <TextHeading as="h2">Heading as H2</TextHeading>
                  <Text as="div">
                    Text component can also be used as a div or span element by using
                    the as prop. This provides flexibility while maintaining consistent styling.
                  </Text>
                </div>
                <Card variant="stroke" direction="horizontal" className="gap-6 p-6">
                  <div className="w-40 h-40 bg-[#E3E3E3] rounded-lg flex-shrink-0" />
                  <div className="flex flex-col gap-4 flex-1">
                    <TextHeading>Card with TextHeading</TextHeading>
                    <Text>
                      Example of using TextHeading and Text components within a card
                      layout, matching the pattern used in the about page.
                    </Text>
                  </div>
                </Card>
              </CardContent>
            </Card>
          </section>

          {/* Layout Components Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Layout Components</h2>
            <Card>
              <CardHeader>
                <CardTitle>Section, Flex, TextContentHeading, TextContentTitle</CardTitle>
                <CardDescription>
                  Layout foundation components for building pages
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Section padding="1200" className="bg-[#f5f5f5] rounded-lg">
                  <TextContentHeading
                    heading="Section Heading"
                    subheading="Section subheading text"
                    align="center"
                  />
                </Section>
                <Flex container direction="column" gap="600">
                  <TextContentTitle
                    title="Hero Title"
                    subtitle="Hero subtitle description"
                    align="center"
                  />
                  <Flex wrap gap="400">
                    <FlexItem size="half">
                      <Card>
                        <CardContent className="p-4">
                          <p>Flex Item 1</p>
                        </CardContent>
                      </Card>
                    </FlexItem>
                    <FlexItem size="half">
                      <Card>
                        <CardContent className="p-4">
                          <p>Flex Item 2</p>
                        </CardContent>
                      </Card>
                    </FlexItem>
                  </Flex>
                </Flex>
              </CardContent>
            </Card>
          </section>

          {/* Header & Footer Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Header & Footer</h2>
            <Card>
              <CardHeader>
                <CardTitle>Header and Footer Components</CardTitle>
                <CardDescription>
                  Site navigation and footer components
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Header
                    logo="My Site"
                    navItems={[
                      { label: "Home", href: "/" },
                      { label: "About", href: "/about" },
                      { label: "Contact", href: "/contact" },
                    ]}
                    actions={<Button size="sm">Action</Button>}
                  />
                </div>
                <div className="space-y-4">
                  <HeaderAuth
                    logo="My Site"
                    onLogin={() => {}}
                    onSignUp={() => {}}
                  />
                </div>
                <div className="-mx-6">
                  <Footer
                    logo="My Site"
                    columns={[
                      {
                        title: "Product",
                        links: [
                          { label: "Features", href: "/features" },
                          { label: "Pricing", href: "/pricing" },
                        ],
                      },
                      {
                        title: "Company",
                        links: [
                          { label: "About", href: "/about" },
                          { label: "Contact", href: "/contact" },
                        ],
                      },
                    ]}
                    copyright="© 2025 My Company"
                  />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Hero Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Hero Components</h2>
            <Card>
              <CardHeader>
                <CardTitle>Hero Variants</CardTitle>
                <CardDescription>
                  Hero sections for page headers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Hero variant="subtle" title="Hero Title" subtitle="Hero subtitle" />
                <HeroActions
                  variant="subtle"
                  title="Hero with Actions"
                  subtitle="Hero with action buttons"
                  primaryAction={{ label: "Primary", onClick: () => {} }}
                  secondaryAction={{ label: "Secondary", onClick: () => {} }}
                />
                <HeroNewsletter
                  variant="subtle"
                  title="Subscribe"
                  subtitle="Get updates"
                  onSubmit={(email) => console.log(email)}
                />
              </CardContent>
            </Card>
          </section>

          {/* Panel Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Panel Components</h2>
            <Card>
              <CardHeader>
                <CardTitle>Panel Layouts</CardTitle>
                <CardDescription>
                  Flexible panel layouts for images and content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <PanelImage
                  src="https://placehold.co/1200x675/E3E3E3/757575?text=Panel+Image"
                  alt="Panel image"
                  aspectRatio="16-9"
                />
                <PanelImageContent
                  src="https://placehold.co/800x600/E3E3E3/757575?text=Panel+Content"
                  alt="Panel content"
                  heading="Panel Heading"
                  subheading="Panel subheading"
                  content="Panel content text goes here."
                  aspectRatio="4-3"
                />
              </CardContent>
            </Card>
          </section>

          {/* Card Components Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Card Components</h2>
            <Flex type="third" gap="600" wrap>
              <ReviewCard
                stars={5}
                title="Great Product"
                body="This product exceeded my expectations. Highly recommended!"
                date="January 15, 2025"
                name="John Doe"
                fallback="JD"
              />
              <ProductInfoCard
                asset={<div className="w-full h-full bg-[#E3E3E3]" />}
                rating={4.5}
                heading="Product Name"
                price="$99.99"
                description="Product description"
              />
              <StatsCard
                stat="1,234"
                description="Active users"
                icon={<TrendingUp className="h-6 w-6 text-[#1e1e1e]" />}
              />
              <TestimonialCard
                heading='"This product changed my life!"'
                name="Jane Smith"
                username="@janesmith"
                fallback="JS"
              />
              <PricingCard
                heading="Pro Plan"
                price="50"
                priceCurrency="$"
                priceLabel="/ mo"
                action="Get Started"
                listSlot={
                  <ul className="space-y-2">
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                  </ul>
                }
              />
            </Flex>
          </section>

          {/* Supporting Components Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Supporting Components</h2>
            <Card>
              <CardHeader>
                <CardTitle>Tags, Navigation, CheckboxGroup</CardTitle>
                <CardDescription>
                  Supporting components for filters and navigation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Tags</h3>
                  <Flex wrap gap="400">
                    <Tag>Default</Tag>
                    <Tag variant="secondary">Secondary</Tag>
                    <Tag variant="destructive">Error</Tag>
                    <Tag variant="outline">Outline</Tag>
                    <Tag onRemove={() => {}}>Removable</Tag>
                  </Flex>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Navigation Pills</h3>
                  <Navigation>
                    <NavigationPill isSelected>Monthly</NavigationPill>
                    <NavigationPill>Yearly</NavigationPill>
                    <NavigationPill>Link</NavigationPill>
                  </Navigation>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Tag Toggle Group</h3>
                  <TagToggleGroup
                    label="Sort by"
                    items={[
                      { id: "new", label: "New" },
                      { id: "price-asc", label: "Price ascending" },
                      { id: "price-desc", label: "Price descending" },
                    ]}
                    selectedIds={["new"]}
                    onSelectionChange={(ids) => console.log(ids)}
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Checkbox Group</h3>
                  <CheckboxGroup
                    items={[
                      { value: "option1", label: "Option 1", description: "Description 1" },
                      { value: "option2", label: "Option 2", description: "Description 2" },
                    ]}
                    selectedValues={["option1"]}
                    onSelectionChange={(values) => console.log(values)}
                  />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Form Field Components Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Form Field Components</h2>
            <Card>
              <CardHeader>
                <CardTitle>Advanced Form Fields</CardTitle>
                <CardDescription>
                  Specialized form field components
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Flex direction="column" gap="600" wrap>
                  <DateInputField
                    label="Date of Birth"
                    description="Enter your date of birth"
                    day="15"
                    month="01"
                    year="1990"
                  />
                  <DatePickerField
                    label="Select Date"
                    placeholder="Choose a date"
                    value="2025-01-15"
                  />
                  <Search placeholder="Search products..." />
                  <RadioField
                    label="Select Option"
                    options={[
                      { value: "option1", label: "Option 1" },
                      { value: "option2", label: "Option 2" },
                    ]}
                    value="option1"
                    onValueChange={(value) => console.log(value)}
                  />
                  <SliderField
                    label="Price Range"
                    showOutput={true}
                    min={0}
                    max={1000}
                    value={[500]}
                    onValueChange={(value) => console.log(value)}
                  />
                  <SwitchField
                    label="Enable notifications"
                    description="Receive email notifications"
                    checked={switchChecked}
                    onCheckedChange={setSwitchChecked}
                  />
                </Flex>
              </CardContent>
            </Card>
          </section>

          {/* AI Chatbot Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">AI Chatbot Components</h2>
            <Card>
              <CardHeader>
                <CardTitle>AI Chatbot System</CardTitle>
                <CardDescription>
                  Complete AI chatbot interface components
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <AiSidebar
                    chats={[
                      { id: "1", title: "Analog Clock React app", active: true },
                      { id: "2", title: "Simple Design System" },
                      { id: "3", title: "Figma variable planning" },
                    ]}
                    user={{
                      email: "flippy@figma.com",
                      fallback: "F",
                    }}
                    onNewChat={() => {}}
                  />
                  <div className="flex-1 flex flex-col gap-6 p-6">
                    <AiConversation
                      messages={[
                        {
                          type: "user",
                          content: "Hey Flippy! Write me a script for building an Analog Clock.",
                        },
                        {
                          type: "assistant",
                          content: "Sure. Here is a Typescript code block for your Analog Clock project. It is built using React, and uses the local time for London, England as standard. Let me know if you would like to make any refinements to the code.",
                          icon: <Bot className="h-5 w-5 text-[#1e1e1e]" />,
                          code: `import React, { useState, useEffect } from "react";

export default function AnalogClock() {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    };

    updateClock();
    const timerId = setInterval(updateClock, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      {time.hours}:{time.minutes}:{time.seconds}
    </div>
  );
}`,
                        },
                      ]}
                    />
                    <AiChatBox
                      placeholder="What would you like to know?"
                      value=""
                      onChange={() => {}}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Footer - Outside container to prevent overlap */}
        <footer className="w-full text-center text-muted-foreground pt-8 pb-8 border-t bg-background relative z-50">
          <div className="container mx-auto px-4">
            <p>Built with shadcn/ui and Tailwind CSS</p>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}
