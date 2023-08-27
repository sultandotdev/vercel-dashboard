"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import {
  CaretSortIcon,
  PlusCircledIcon,
  CircleIcon,
  GearIcon,
  ExternalLinkIcon,
  PlusIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Cross2Icon,
  GitHubLogoIcon,
  TwitterLogoIcon,
  MagnifyingGlassIcon,
  DashboardIcon,
  ListBulletIcon,
} from "@radix-ui/react-icons"
import {
  Monitor,
  Laugh,
  Smile,
  Meh,
  Frown,
  BellIcon,
  Inbox,
  Check,
  Circle,
  MoveRight,
  Database,
} from "lucide-react"
import ViewCode from "@/components/viewcode"

export default function Home() {
  const [selectedToggle, setSelectedToggle] = React.useState(null)
  const [selectedValue, setSelectedValue] = React.useState("free-trial")
  const [contentExpanded, setContentExpanded] = React.useState(false)
  const [teamsInputValue, setTeamsInputValue] = React.useState("")
  const [projectsInputValue, setProjectsInputValue] = React.useState("")
  const [placeholder, setPlaceHolder] = React.useState("System")
  const [open, setOpen] = React.useState(false)
  const [isNecessaryOpen, setIsNecessaryOpen] = React.useState(false)
  const [isOptionalOpen, setIsOptionalOpen] = React.useState(true)
  const [isSwitchChecked, setIsSwitchChecked] = React.useState(false)
  const [isFeedbackOpen, setIsFeedbackOpen] = React.useState(false)
  const [isTeamDialogOpen, setIsTeamDialogOpen] = React.useState(false)
  const [isTeamDialogOpen2, setIsTeamDialogOpen2] = React.useState(false)
  const [isTeamDialogOpen3, setIsTeamDialogOpen3] = React.useState(false)
  const [isCookiesDialogOpen, setIsCookiesDialogOpen] = React.useState(false)
  const [isDataDialog, setIsDataDialog] = React.useState()
  const [activeTab, setActiveTab] = React.useState("overview")
  const [selectedOption, setSelectedOption] = React.useState("edgeconfig")
  const [selectedItem, setSelectedItem] = React.useState("Default (on)")
  const { setTheme } = useTheme()

  const handleToggleClick = (toggleId) => {
    setSelectedToggle(selectedToggle === toggleId ? null : toggleId)
  }

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  React.useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <nav className="relative flex h-[64px] justify-between p-[24px] dark:bg-black">
        <div className="flex items-center gap-4">
          <svg
            width="25"
            height="25"
            viewBox="0 0 76 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.5274 0L75.0548 65H0L37.5274 0Z"
              fill="#000000"
              className="dark:fill-white"
            />
          </svg>
          <p className="text-xl font-thin text-gray-200 dark:text-neutral-700">
            /
          </p>
          <div className="flex items-center justify-center gap-2">
            <Dialog>
              <ContextMenu>
                <ContextMenuTrigger>
                  <Avatar className="h-[22px] w-[22px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <DialogTrigger className="w-full">
                    <ContextMenuItem>View Code</ContextMenuItem>
                  </DialogTrigger>
                </ContextMenuContent>
              </ContextMenu>
              <ViewCode
                installation={`shadcn-ui@latest add avatar`}
                imports={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"`}
                code={`<Avatar className="h-[22px] w-[22px]">
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
              />
            </Dialog>
            <p className="text-sm font-medium text-gray-800 dark:text-white">
              sultandotdev
            </p>
            <Dialog>
              <ContextMenu>
                <ContextMenuTrigger>
                  <Badge
                    variant="secondary"
                    className="flex h-[20px] w-[50px] justify-center
                      bg-gray-100 px-1.5 text-[11px] font-medium"
                  >
                    Hobby
                  </Badge>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <DialogTrigger className="w-full">
                    <ContextMenuItem>View Code</ContextMenuItem>
                  </DialogTrigger>
                </ContextMenuContent>
              </ContextMenu>
              <ViewCode
                installation={`shadcn-ui@latest add badge`}
                imports={`import { Badge } from "@/components/ui/badge"`}
                code={`<Badge
variant="secondary"
className="flex h-[20px] w-[50px] justify-center
bg-gray-100 px-1.5 text-[11px] font-medium"
>
Hobby
</Badge>`}
              />
            </Dialog>
          </div>
          <Dialog>
            <ContextMenu>
              <ContextMenuTrigger>
                <Popover className="relative">
                  <PopoverTrigger
                    className="flex justify-center
                    rounded-md hover:bg-gray-200 data-[state=open]:bg-gray-200 dark:hover:bg-gray-800
                  data-[state=open]:dark:bg-gray-800"
                  >
                    <CaretSortIcon className="h-8 w-5 text-gray-500" />
                  </PopoverTrigger>
                  <PopoverContent className="absolute right-56 mt-2 h-0 w-0 p-0">
                    <div className="flex w-[512px] rounded-xl shadow-sm">
                      <Command
                        className="h-[204px] w-full rounded-xl rounded-r-none
                        border border-gray-200 bg-white shadow-sm dark:border-gray-800"
                      >
                        <CommandSeparator />
                        <CommandInput
                          placeholder="Find Team..."
                          value={teamsInputValue}
                          onInput={(e) => {
                            setTeamsInputValue(e.target.value)
                          }}
                        />
                        <CommandList className=" overflow-hidden px-2 pb-6 pt-4">
                          <CommandEmpty className="flex flex-col items-start gap-4 px-2">
                            <h1 className="text-sm font-medium">
                              No Teams found
                            </h1>
                            <p className="text-left text-sm text-gray-500">
                              Your search for "{teamsInputValue}" did not match
                              any teams.
                            </p>
                            <Button
                              className="h-8 w-full rounded-lg"
                              variant="outline"
                              onClick={() => setTeamsInputValue("")}
                            >
                              Clear Search
                            </Button>
                          </CommandEmpty>
                          <CommandGroup heading="Personal Account">
                            <CommandItem className="mt-2 h-[40px] rounded-md aria-selected:bg-gray-200">
                              <Avatar className="mr-2 h-[22px] w-[22px]">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                              </Avatar>
                              sultandotdev
                              <Check className="ml-auto h-5 w-5 text-gray-500" />
                            </CommandItem>
                            <Dialog
                              open={isTeamDialogOpen}
                              onOpenChange={setIsTeamDialogOpen}
                            >
                              <DialogTrigger className="w-full">
                                <CommandItem className="mt-2 h-[40px] cursor-pointer rounded-md aria-selected:bg-gray-200">
                                  <PlusCircledIcon className="mr-2 text-blue-600" />
                                  Create team
                                </CommandItem>
                              </DialogTrigger>
                              <DialogContent className="flex w-[480px] flex-col px-0 py-0">
                                <DialogHeader
                                  className="flex h-16 justify-center rounded-b-xl rounded-t-lg bg-gray-50
                                  px-6 dark:border dark:border-neutral-800 dark:bg-neutral-900"
                                >
                                  <DialogTitle className="text-xl">
                                    Create Team
                                  </DialogTitle>
                                </DialogHeader>
                                <div className="mb-2 mt-4 flex flex-col gap-2 px-6">
                                  <label className="text-sm text-gray-500">
                                    Team Name
                                  </label>
                                  <Input placeholder="Team name..." />
                                </div>
                                <RadioGroup
                                  className="mb-2 ml-auto mr-auto flex w-full gap-4 px-6"
                                  defaultValue={
                                    selectedValue === "free-trial"
                                      ? "free-trial"
                                      : "pro"
                                  }
                                >
                                  <label
                                    htmlFor="free-trial"
                                    className="w-full cursor-pointer"
                                  >
                                    <div
                                      className={`flex items-center justify-between rounded-lg border border-gray-200
                                      px-4 py-4 dark:bg-transparent ${
                                        selectedValue === "free-trial"
                                          ? "border-blue-600 bg-blue-200 dark:border-blue-500"
                                          : "dark:border-gray-800"
                                      }`}
                                    >
                                      <div>
                                        <h1 className="mb-2 font-medium">
                                          Pro Trial
                                        </h1>
                                        <p className="text-sm text-gray-500">
                                          Free for two weeks
                                        </p>
                                      </div>
                                      <RadioGroupItem
                                        value="free-trial"
                                        id="free-trial"
                                        className={
                                          selectedValue === "free-trial"
                                            ? "bg-blue-500 text-white"
                                            : "border-gray-300"
                                        }
                                        onClick={() =>
                                          setSelectedValue("free-trial")
                                        }
                                      />
                                    </div>
                                  </label>
                                  <label
                                    htmlFor="pro"
                                    className="w-full cursor-pointer"
                                  >
                                    <div
                                      className={`flex items-center justify-between rounded-lg border border-gray-200
                                      px-4 py-4 dark:bg-transparent ${
                                        selectedValue === "pro"
                                          ? "border-blue-600 bg-blue-200 dark:border-blue-500"
                                          : "dark:border-gray-800"
                                      }`}
                                    >
                                      <div>
                                        <h1 className="mb-2 font-medium">
                                          Pro
                                        </h1>
                                        <p className="text-sm text-gray-500">
                                          Get started now
                                        </p>
                                      </div>
                                      <RadioGroupItem
                                        value="pro"
                                        id="pro"
                                        className={
                                          selectedValue === "pro"
                                            ? "bg-blue-500 text-white"
                                            : "border-gray-300"
                                        }
                                        onClick={() => setSelectedValue("pro")}
                                      />
                                    </div>
                                  </label>
                                </RadioGroup>
                                <Collapsible className="mb-4 px-6">
                                  <CollapsibleTrigger
                                    className="flex items-center gap-2 text-sm font-medium"
                                    onClick={() =>
                                      setContentExpanded(!contentExpanded)
                                    }
                                  >
                                    {!contentExpanded && (
                                      <ChevronRightIcon className="h-5 w-5 text-gray-500" />
                                    )}
                                    {contentExpanded && (
                                      <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                                    )}
                                    {selectedValue === "free-trial"
                                      ? "Continuing will start a 14-day Pro plan trial"
                                      : "Continuing will start a monthly Pro plan subscription"}
                                  </CollapsibleTrigger>
                                  <CollapsibleContent className="mt-2 px-7 text-sm">
                                    <p className="mb-2">
                                      Creating a new team will not affect your
                                      Personal Account (Hobby) or any of its
                                      projects.
                                    </p>
                                    <a
                                      href="https://vercel.com/docs/accounts/plans/pro/trials"
                                      alt="vercel docs pro plan"
                                      target="_blank"
                                      className="flex w-fit items-center gap-1 font-medium
                                 text-blue-600 hover:border-b hover:border-blue-600"
                                    >
                                      Learn More
                                      <ExternalLinkIcon className="font-medium" />
                                    </a>
                                  </CollapsibleContent>
                                </Collapsible>
                                <div
                                  className="flex justify-between border-t bg-gray-100 px-4 py-4
                                dark:border-gray-700 dark:bg-neutral-900"
                                >
                                  <Button
                                    variant="outline"
                                    onClick={() => setIsTeamDialogOpen(false)}
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    onClick={() => setIsTeamDialogOpen(false)}
                                  >
                                    Continue
                                  </Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </CommandGroup>
                        </CommandList>
                      </Command>
                      <Command
                        className="h-[204px] w-full rounded-xl rounded-l-none border
                      border-gray-200 bg-gray-50 shadow-sm hover:bg-white dark:border-gray-800"
                      >
                        <CommandSeparator />
                        <CommandInput
                          placeholder="Find Project..."
                          value={projectsInputValue}
                          onInput={(e) => {
                            setProjectsInputValue(e.target.value)
                          }}
                        />
                        <CommandList className="overflow-hidden px-2 pb-6 pt-2">
                          <CommandEmpty className="flex flex-col items-start gap-4 px-2 py-2">
                            <h1 className="text-sm font-medium">
                              No Projects found
                            </h1>
                            <p className="text-left text-sm text-gray-500">
                              Your search for "{projectsInputValue}" did not
                              match any teams.
                            </p>
                            <Button
                              className="h-8 w-full rounded-lg"
                              variant="outline"
                              onClick={() => setProjectsInputValue("")}
                            >
                              Clear Search
                            </Button>
                          </CommandEmpty>
                          <CommandGroup heading="Projects">
                            <div className="mt-2 flex h-[40px] flex-col gap-1">
                              <h1 className="ml-2 text-sm font-semibold">
                                No projects, yet!
                              </h1>
                              <p className="ml-2 text-sm text-gray-600">
                                {" "}
                                This team has no projects
                              </p>
                            </div>
                            <CommandItem className="mt-4 h-[40px] rounded-md aria-selected:bg-gray-200">
                              <PlusCircledIcon className="mr-2 text-blue-600" />
                              Create Project
                            </CommandItem>
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </div>
                  </PopoverContent>
                </Popover>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <DialogTrigger className="w-full">
                  <ContextMenuItem>View Code</ContextMenuItem>
                </DialogTrigger>
              </ContextMenuContent>
            </ContextMenu>
            <ViewCode
              installation={`shadcn-ui@latest add popover command button avatar dialog radio-group`}
              installation2={`install @radix-ui/react-icons lucide-react`}
              imports={`import {
Popover,
PopoverContent,
PopoverTrigger
} from "@/components/ui/popover"
import {
Command,
CommandEmpty,
CommandGroup,
CommandItem,
CommandList,
CommandSeparator,
CommandInput
} from "@/components/ui/command"
import {
Dialog,
DialogContent,
DialogHeader,
DialogTitle,
DialogTrigger
} from "@/components/ui/dialog"
import {
Collapsible,
CollapsibleContent,
CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
PlusCircledIcon,
ChevronDownIcon,
ChevronRightIcon,
ExternalLinkIcon,
CaretSortIcon,
} from "@radix-ui/react-icons"
import { Check } from "lucide-react"
import * as React from "react"`}
              consts={`const [isTeamDialogOpen, setIsTeamDialogOpen] = React.useState(false)
const [teamsInputValue, setTeamsInputValue] = React.useState("")
const [projectsInputValue, setProjectsInputValue] = React.useState("")
const [selectedValue, setSelectedValue] = React.useState("free-trial")
const [contentExpanded, setContentExpanded] = React.useState(false)

`}
              code={`<Popover className="relative">
  <PopoverTrigger
    className="flex justify-center
    rounded-md hover:bg-gray-200 data-[state=open]:bg-gray-200 dark:hover:bg-gray-800
  data-[state=open]:dark:bg-gray-800"
  >
    <CaretSortIcon className="h-8 w-5 text-gray-500" />
  </PopoverTrigger>
  <PopoverContent className="absolute right-56 mt-2 h-0 w-0 p-0">
    <div className="flex w-[512px] rounded-xl shadow-sm">
      <Command
        className="h-[204px] w-full rounded-xl rounded-r-none
        border border-gray-200 bg-white shadow-sm dark:border-gray-800"
      >
        <CommandSeparator />
        <CommandInput
          placeholder="Find Team..."
          value={teamsInputValue}
          onInput={(e) => {
            setTeamsInputValue(e.target.value);
          }}
        />
        <CommandList className=" overflow-hidden px-2 pb-6 pt-4">
          <CommandEmpty className="flex flex-col items-start gap-4 px-2">
            <h1 className="text-sm font-medium">No Teams found</h1>
            <p className="text-left text-sm text-gray-500">
              Your search for "{teamsInputValue}" did not match any teams.
            </p>
            <Button
              className="h-8 w-full rounded-lg"
              variant="outline"
              onClick={() => setTeamsInputValue("")}
            >
              Clear Search
            </Button>
          </CommandEmpty>
          <CommandGroup heading="Personal Account">
            <CommandItem className="mt-2 h-[40px] rounded-md aria-selected:bg-gray-200">
              <Avatar className="mr-2 h-[22px] w-[22px]">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              sultandotdev
              <Check className="ml-auto h-5 w-5 text-gray-500" />
            </CommandItem>
            <Dialog open={isTeamDialogOpen} onOpenChange={setIsTeamDialogOpen}>
              <DialogTrigger className="w-full">
                <CommandItem className="mt-2 h-[40px] cursor-pointer rounded-md aria-selected:bg-gray-200">
                  <PlusCircledIcon className="mr-2 text-blue-600" />
                  Create team
                </CommandItem>
              </DialogTrigger>
              <DialogContent className="flex w-[480px] flex-col px-0 py-0">
                <DialogHeader
                  className="flex h-16 justify-center rounded-b-xl rounded-t-lg bg-gray-50
                  px-6 dark:border dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <DialogTitle className="text-xl">Create Team</DialogTitle>
                </DialogHeader>
                <div className="mb-2 mt-4 flex flex-col gap-2 px-6">
                  <label className="text-sm text-gray-500">Team Name</label>
                  <Input placeholder="Team name..." />
                </div>
                <RadioGroup
                  className="mb-2 ml-auto mr-auto flex w-full gap-4 px-6"
                  defaultValue={
                    selectedValue === "free-trial" ? "free-trial" : "pro"
                  }
                >
                  <label htmlFor="free-trial" className="w-full cursor-pointer">
                    <div
                      className={\`flex items-center justify-between rounded-lg border border-gray-200
                      px-4 py-4 dark:bg-transparent \${
                        selectedValue === "free-trial"
                          ? "border-blue-600 bg-blue-200 dark:border-blue-500"
                          : "dark:border-gray-800"
                      }\`}
                    >
                      <div>
                        <h1 className="mb-2 font-medium">Pro Trial</h1>
                        <p className="text-sm text-gray-500">
                          Free for two weeks
                        </p>
                      </div>
                      <RadioGroupItem
                        value="free-trial"
                        id="free-trial"
                        className={
                          selectedValue === "free-trial"
                            ? "bg-blue-500 text-white"
                            : "border-gray-300"
                        }
                        onClick={() => setSelectedValue("free-trial")}
                      />
                    </div>
                  </label>
                  <label htmlFor="pro" className="w-full cursor-pointer">
                    <div
                      className={\`flex items-center justify-between rounded-lg border border-gray-200
                      px-4 py-4 dark:bg-transparent \${
                        selectedValue === "pro"
                          ? "border-blue-600 bg-blue-200 dark:border-blue-500"
                          : "dark:border-gray-800"
                      }\`}
                    >
                      <div>
                        <h1 className="mb-2 font-medium">Pro</h1>
                        <p className="text-sm text-gray-500">Get started now</p>
                      </div>
                      <RadioGroupItem
                        value="pro"
                        id="pro"
                        className={
                          selectedValue === "pro"
                            ? "bg-blue-500 text-white"
                            : "border-gray-300"
                        }
                        onClick={() => setSelectedValue("pro")}
                      />
                    </div>
                  </label>
                </RadioGroup>
                <Collapsible className="mb-4 px-6">
                  <CollapsibleTrigger
                    className="flex items-center gap-2 text-sm font-medium"
                    onClick={() => setContentExpanded(!contentExpanded)}
                  >
                    {!contentExpanded && (
                      <ChevronRightIcon className="h-5 w-5 text-gray-500" />
                    )}
                    {contentExpanded && (
                      <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                    )}
                    {selectedValue === "free-trial"
                      ? "Continuing will start a 14-day Pro plan trial"
                      : "Continuing will start a monthly Pro plan subscription"}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 px-7 text-sm">
                    <p className="mb-2">
                      Creating a new team will not affect your Personal Account
                      (Hobby) or any of its projects.
                    </p>
                    <a
                      href="https://vercel.com/docs/accounts/plans/pro/trials"
                      alt="vercel docs pro plan"
                      target="_blank"
                      className="flex w-fit items-center gap-1 font-medium
                    text-blue-600 hover:border-b hover:border-blue-600"
                    >
                      Learn More
                      <ExternalLinkIcon className="font-medium" />
                    </a>
                  </CollapsibleContent>
                </Collapsible>
                <div
                  className="flex justify-between border-t bg-gray-100 px-4 py-4
                dark:border-gray-700 dark:bg-neutral-900"
                >
                  <Button
                    variant="outline"
                    onClick={() => setIsTeamDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button onClick={() => setIsTeamDialogOpen(false)}>
                    Continue
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </CommandGroup>
        </CommandList>
      </Command>
      <Command
        className="h-[204px] w-full rounded-xl rounded-l-none border
      border-gray-200 bg-gray-50 shadow-sm hover:bg-white dark:border-gray-800"
      >
        <CommandSeparator />
        <CommandInput
          placeholder="Find Project..."
          value={projectsInputValue}
          onInput={(e) => {
            setProjectsInputValue(e.target.value);
          }}
        />
        <CommandList className="overflow-hidden px-2 pb-6 pt-2">
          <CommandEmpty className="flex flex-col items-start gap-4 px-2 py-2">
            <h1 className="text-sm font-medium">No Projects found</h1>
            <p className="text-left text-sm text-gray-500">
              Your search for "{projectsInputValue}" did not match any teams.
            </p>
            <Button
              className="h-8 w-full rounded-lg"
              variant="outline"
              onClick={() => setProjectsInputValue("")}
            >
              Clear Search
            </Button>
          </CommandEmpty>
          <CommandGroup heading="Projects">
            <div className="mt-2 flex h-[40px] flex-col gap-1">
              <h1 className="ml-2 text-sm font-semibold">No projects, yet!</h1>
              <p className="ml-2 text-sm text-gray-600">
                {" "}
                This team has no projects
              </p>
            </div>
            <CommandItem className="mt-4 h-[40px] rounded-md aria-selected:bg-gray-200">
              <PlusCircledIcon className="mr-2 text-blue-600" />
              Create Project
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  </PopoverContent>
</Popover>`}
            />
          </Dialog>
        </div>
        <div className="flex items-center gap-4">
          <Dialog>
            <ContextMenu>
              <ContextMenuTrigger>
                <Popover open={isFeedbackOpen} onOpenChange={setIsFeedbackOpen}>
                  <PopoverTrigger
                    className="h-[32px] rounded-md border border-gray-300 bg-white
             px-[12px] py-0 text-sm text-gray-600 dark:border-gray-800 dark:bg-transparent dark:text-gray-300"
                  >
                    Feedback
                  </PopoverTrigger>
                  <PopoverContent className="h-[200px] w-[340px] rounded-lg px-0 py-0">
                    <div className="flex h-full flex-col gap-5">
                      <div className="w-full px-2 py-2">
                        <textarea
                          className="h-[100px] w-full resize-none rounded-md border border-gray-200
                     px-2 py-2 text-sm outline-none placeholder:text-gray-500 focus:border-gray-800 dark:border-gray-800
                      dark:bg-transparent"
                          placeholder="Your feedback..."
                        ></textarea>
                      </div>
                      <div
                        className="flex h-full w-full items-center justify-between gap-4 rounded-b-lg border-t bg-gray-50
                 px-4 dark:border-gray-800 dark:bg-neutral-900"
                      >
                        <div className="flex gap-1">
                          <button
                            onClick={() => handleToggleClick("laugh")}
                            className={`${
                              selectedToggle === "laugh"
                                ? "bg-blue-100"
                                : "bg-transparent"
                            } flex h-8 w-8 items-center justify-center rounded-full`}
                          >
                            <Laugh
                              className={`${
                                selectedToggle === "laugh"
                                  ? "text-blue-600"
                                  : "text-gray-600"
                              } h-4 w-4`}
                            />
                          </button>
                          <button
                            onClick={() => handleToggleClick("smile")}
                            className={`${
                              selectedToggle === "smile"
                                ? "bg-blue-100"
                                : "bg-transparent"
                            } flex h-8 w-8 items-center justify-center rounded-full`}
                          >
                            <Smile
                              className={`${
                                selectedToggle === "smile"
                                  ? "text-blue-600"
                                  : "text-gray-600"
                              } h-4 w-4`}
                            />
                          </button>
                          <button
                            onClick={() => handleToggleClick("meh")}
                            className={`${
                              selectedToggle === "meh"
                                ? "bg-blue-100"
                                : "bg-transparent"
                            } flex h-8 w-8 items-center justify-center rounded-full`}
                          >
                            <Meh
                              className={`${
                                selectedToggle === "meh"
                                  ? "text-blue-600"
                                  : "text-gray-600"
                              } h-4 w-4`}
                            />
                          </button>
                          <button
                            onClick={() => handleToggleClick("frown")}
                            className={`${
                              selectedToggle === "frown"
                                ? "bg-blue-100"
                                : "bg-transparent"
                            } flex h-8 w-8 items-center justify-center rounded-full`}
                          >
                            <Frown
                              className={`${
                                selectedToggle === "frown"
                                  ? "text-blue-600"
                                  : "text-gray-600"
                              } h-4 w-4`}
                            />
                          </button>
                        </div>
                        <Button
                          className="h-8 w-16"
                          onClick={() => setIsFeedbackOpen((prev) => !prev)}
                        >
                          Send
                        </Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <DialogTrigger className="w-full">
                  <ContextMenuItem>View Code</ContextMenuItem>
                </DialogTrigger>
              </ContextMenuContent>
            </ContextMenu>
            <ViewCode
              installation={`shadcn-ui@latest add popover button`}
              installation2={`install lucide-react`}
              imports={`import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Laugh, Smile, Meh, Frown } from "lucide-react"
import * as React from "react"`}
              consts={`const [isFeedbackOpen, setIsFeedbackOpen] = React.useState(false)
const [selectedToggle, setSelectedToggle] = React.useState(null)

const handleToggleClick = (toggleId) => {
  setSelectedToggle(selectedToggle === toggleId ? null : toggleId)
}

`}
              code={`<Popover open={isFeedbackOpen} onOpenChange={setIsFeedbackOpen}>
  <PopoverTrigger
    className="h-[32px] rounded-md border border-gray-300 bg-white
    px-[12px] py-0 text-sm text-gray-600 dark:border-gray-800 dark:bg-transparent dark:text-gray-300"
  >
    Feedback
  </PopoverTrigger>
  <PopoverContent className="h-[200px] w-[340px] rounded-lg px-0 py-0">
    <div className="flex h-full flex-col gap-5">
      <div className="w-full px-2 py-2">
        <textarea
          className="h-[100px] w-full resize-none rounded-md border border-gray-200
          px-2 py-2 text-sm outline-none placeholder:text-gray-500 focus:border-gray-800 dark:border-gray-800
          dark:bg-transparent"
          placeholder="Your feedback..."
        ></textarea>
      </div>
      <div
        className="flex h-full w-full items-center justify-between gap-4 rounded-b-lg border-t bg-gray-50
        px-4 dark:border-gray-800 dark:bg-neutral-900"
      >
        <div className="flex gap-1">
          <button
            onClick={() => handleToggleClick("laugh")}
            className={\`\${
              selectedToggle === "laugh" ? "bg-blue-100" : "bg-transparent"
            } flex h-8 w-8 items-center justify-center rounded-full\`}
          >
            <Laugh
              className={\`\${
                selectedToggle === "laugh" ? "text-blue-600" : "text-gray-600"
              } h-4 w-4\`}
            />
          </button>
          <button
            onClick={() => handleToggleClick("smile")}
            className={\`\${
              selectedToggle === "smile" ? "bg-blue-100" : "bg-transparent"
            } flex h-8 w-8 items-center justify-center rounded-full\`}
          >
            <Smile
              className={\`\${
                selectedToggle === "smile" ? "text-blue-600" : "text-gray-600"
              } h-4 w-4\`}
            />
          </button>
          <button
            onClick={() => handleToggleClick("meh")}
            className={\`\${
              selectedToggle === "meh" ? "bg-blue-100" : "bg-transparent"
            } flex h-8 w-8 items-center justify-center rounded-full\`}
          >
            <Meh
              className={\`\${
                selectedToggle === "meh" ? "text-blue-600" : "text-gray-600"
              } h-4 w-4\`}
            />
          </button>
          <button
            onClick={() => handleToggleClick("frown")}
            className={\`\${
              selectedToggle === "frown" ? "bg-blue-100" : "bg-transparent"
            } flex h-8 w-8 items-center justify-center rounded-full\`}
          >
            <Frown
              className={\`\${
                selectedToggle === "frown" ? "text-blue-600" : "text-gray-600"
              } h-4 w-4\`}
            />
          </button>
        </div>
        <Button
          className="h-8 w-16"
          onClick={() => setIsFeedbackOpen((prev) => !prev)}
        >
          Send
        </Button>
      </div>
    </div>
  </PopoverContent>
</Popover>`}
            />
          </Dialog>

          <a
            href="https://vercel.com/changelog"
            target="_blank"
            className="text-sm text-gray-600 dark:text-neutral-400"
          >
            Changelog
          </a>
          <a
            href="https://vercel.com/help"
            target="_blank"
            className="text-sm text-gray-600 dark:text-neutral-400"
          >
            Help
          </a>
          <a
            href="https://vercel.com/docs"
            target="_blank"
            className="text-sm text-gray-600 dark:text-neutral-400"
          >
            Docs
          </a>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Dialog>
                <ContextMenu>
                  <ContextMenuTrigger>
                    <Popover>
                      <PopoverTrigger className="grid place-content-center">
                        <CircleIcon
                          className="relative h-8 w-8 rounded-full border border-gray-100
                   text-transparent dark:border-gray-800"
                        />
                        <BellIcon className="absolute right-2 top-2 h-4 w-4 text-gray-500" />
                      </PopoverTrigger>
                      <PopoverContent className="mr-14 mt-2 h-[500px] w-[400px] px-0 py-2">
                        <Tabs
                          defaultValue="inbox"
                          className="relative h-full w-full"
                        >
                          <TabsList
                            className="w-full rounded-none border-b border-gray-300
                     bg-transparent shadow-none dark:border-neutral-800 dark:bg-transparent"
                          >
                            <TabsTrigger
                              value="inbox"
                              className="relative h-[39px] rounded-none bg-transparent 
                        after:absolute after:bottom-0
                        after:h-[2px] after:w-8/12 after:content-[''] data-[state=active]:text-slate-500
                         data-[state=active]:shadow-none after:data-[state=active]:bg-black after:data-[state=active]:dark:bg-white"
                            >
                              Inbox
                            </TabsTrigger>
                            <TabsTrigger
                              value="archive"
                              className="relative h-[39px] rounded-none bg-transparent 
                        after:absolute after:bottom-0
                        after:h-[2px] after:w-8/12
                         after:content-[''] data-[state=active]:text-slate-500 data-[state=active]:shadow-none after:data-[state=active]:bg-black after:data-[state=active]:dark:bg-white"
                            >
                              Archive
                            </TabsTrigger>

                            <GearIcon
                              className="ml-auto mr-2 cursor-pointer"
                              onClick={() => setActiveTab("settings")}
                            />
                          </TabsList>
                          <TabsContent
                            value="inbox"
                            className="absolute inset-40 top-52"
                          >
                            <div
                              className="ml-auto mr-auto flex h-12
                       w-12 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900"
                            >
                              <Inbox className="h-5 w-5 text-gray-500" />
                            </div>
                            <div className="mt-2 grid place-content-center">
                              <h1 className="whitespace-nowrap text-sm text-gray-500">
                                No new notifications
                              </h1>
                            </div>
                          </TabsContent>
                          <TabsContent
                            value="archive"
                            className="absolute inset-40 top-52"
                          >
                            <div
                              className="ml-auto mr-auto flex h-12 w-12
                       items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900"
                            >
                              <Inbox className="h-5 w-5 text-gray-500" />
                            </div>
                            <div className="mt-2 grid place-content-center">
                              <h1 className="whitespace-nowrap text-sm text-gray-500">
                                Nothing in the archive
                              </h1>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </PopoverContent>
                    </Popover>
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <DialogTrigger className="w-full">
                      <ContextMenuItem>View Code</ContextMenuItem>
                    </DialogTrigger>
                  </ContextMenuContent>
                </ContextMenu>
                <ViewCode
                  installation={`shadcn-ui@latest add popover tabs`}
                  installation2={`install @radix-ui/react-icons lucide-react`}
                  details={`the onclick function on the gear icon sets the tab of the home page`}
                  imports={`import {
Popover,
PopoverContent,
PopoverTrigger
} from "@/components/ui/popover"
import {
Tabs,
TabsContent,
TabsList,
TabsTrigger
} from "@/components/ui/tabs"
import { Inbox, BellIcon } from "lucide-react"
import { GearIcon, CircleIcon } from "@radix-ui/react-icons"`}
                  code={`<div className="relative">
  <Popover>
    <PopoverTrigger className="grid place-content-center">
      <CircleIcon
        className="relative h-8 w-8 rounded-full border border-gray-100
        text-transparent dark:border-gray-800"
      />
      <BellIcon className="absolute right-2 top-2 h-4 w-4 text-gray-500" />
    </PopoverTrigger>
    <PopoverContent className="mt-2 h-[500px] w-[400px] px-0 py-2">
      <Tabs defaultValue="inbox" className="relative h-full w-full">
        <TabsList
          className="w-full rounded-none border-b border-gray-300
          bg-transparent shadow-none dark:border-neutral-800 dark:bg-transparent"
        >
          <TabsTrigger
            value="inbox"
            className="relative h-[39px] rounded-none bg-transparent 
            after:absolute after:bottom-0
            after:h-[2px] after:w-8/12 after:content-[''] data-[state=active]:text-slate-500
            data-[state=active]:shadow-none after:data-[state=active]:bg-black after:data-[state=active]:dark:bg-white"
          >
            Inbox
          </TabsTrigger>
          <TabsTrigger
            value="archive"
            className="relative h-[39px] rounded-none bg-transparent 
            after:absolute after:bottom-0
            after:h-[2px] after:w-8/12
            after:content-[''] data-[state=active]:text-slate-500 data-[state=active]:shadow-none after:data-[state=active]:bg-black after:data-[state=active]:dark:bg-white"
          >
            Archive
          </TabsTrigger>

          <GearIcon
            className="ml-auto mr-2 cursor-pointer"
          />
        </TabsList>
        <TabsContent value="inbox" className="absolute inset-40 top-52">
          <div
            className="ml-auto mr-auto flex h-12
            w-12 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900"
          >
            <Inbox className="h-5 w-5 text-gray-500" />
          </div>
          <div className="mt-2 grid place-content-center">
            <h1 className="whitespace-nowrap text-sm text-gray-500">
              No new notifications
            </h1>
          </div>
        </TabsContent>
        <TabsContent value="archive" className="absolute inset-40 top-52">
          <div
            className="ml-auto mr-auto flex h-12 w-12
            items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900"
          >
            <Inbox className="h-5 w-5 text-gray-500" />
          </div>
          <div className="mt-2 grid place-content-center">
            <h1 className="whitespace-nowrap text-sm text-gray-500">
              Nothing in the archive
            </h1>
          </div>
        </TabsContent>
      </Tabs>
    </PopoverContent>
  </Popover>
</div>`}
                />
              </Dialog>
            </div>
            <Dialog>
              <ContextMenu>
                <ContextMenuTrigger>
                  <Dialog
                    open={isTeamDialogOpen2}
                    onOpenChange={setIsTeamDialogOpen2}
                  >
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center">
                        <Avatar className="h-[32px] w-[32px]">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="mr-7 mt-2 h-[435px] w-[250px] rounded-xl px-4">
                        <DropdownMenuItem className="mt-3 text-gray-500">
                          example@gmail.com
                        </DropdownMenuItem>
                        <a
                          href="https://vercel.com/Dashboard"
                          alt="vercel website home section"
                          className="w-full"
                          target="_blank"
                        >
                          <DropdownMenuItem className="mt-1 text-gray-500">
                            Dashboard
                          </DropdownMenuItem>
                        </a>
                        <DropdownMenuItem className="mt-1 text-gray-500">
                          Settings
                        </DropdownMenuItem>
                        <DialogTrigger
                          className="w-full"
                          onClick={(event) => {
                            event.stopPropagation()
                          }}
                        >
                          <DropdownMenuItem className="mt-1 text-gray-500">
                            <div className="flex w-full items-center justify-between">
                              <h1>New Team</h1>
                              <PlusIcon className="mr-2 h-4 w-4" />
                            </div>
                          </DropdownMenuItem>
                        </DialogTrigger>
                        <DropdownMenuSeparator className="mb-3 mt-3" />
                        <DropdownMenuItem
                          className="mt-1 flex justify-between text-gray-500"
                          onClick={() => setOpen((prev) => !prev)}
                        >
                          Command Menu
                          <div className="flex gap-1">
                            <kbd>
                              <DropdownMenuShortcut
                                className="flex h-7 w-8 items-center justify-center rounded-md border
                         border-gray-200 px-2 font-sans text-black opacity-100 dark:border-gray-800 dark:text-white"
                              >
                                Ctrl
                              </DropdownMenuShortcut>
                            </kbd>
                            <kbd>
                              <DropdownMenuShortcut
                                className="flex h-7 w-6 items-center justify-center rounded-md
                         border border-gray-200 font-sans text-black opacity-100 dark:border-gray-800 dark:text-white"
                              >
                                K
                              </DropdownMenuShortcut>
                            </kbd>
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="mt-1 flex justify-between text-gray-500">
                          Theme
                          <Select
                            onValueChange={(value) => {
                              setTheme(value)
                              setPlaceHolder(value)
                            }}
                          >
                            <SelectTrigger className="h-6 w-24 bg-gray-50 px-2 text-xs text-gray-700 dark:text-gray-300">
                              <div className="flex items-center gap-2">
                                <Monitor className="h-3 w-3 text-gray-500" />
                                <SelectValue
                                  placeholder={capitalizeFirstLetter(
                                    placeholder,
                                  )}
                                />
                              </div>
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="system" className="text-xs">
                                System
                              </SelectItem>
                              <SelectItem value="light" className="text-xs">
                                Light
                              </SelectItem>
                              <SelectItem value="dark" className="text-xs">
                                Dark
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="mb-3 mt-3" />
                        <DropdownMenuItem className="text-gray-500">
                          <a
                            href="https://vercel.com/home"
                            alt="vercel website home section"
                            className="w-full"
                            target="_blank"
                          >
                            <div className="flex w-full items-center justify-between">
                              <h1>Vercel Homepage</h1>
                              <ExternalLinkIcon className="mr-2 h-4 w-4" />
                            </div>
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="mt-1 text-gray-500">
                          Log out
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="mb-3 mt-3" />
                        <DropdownMenuItem>
                          <Button className="h-[32px] w-full py-0">
                            Upgrade to Pro
                          </Button>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <DialogContent className="flex w-[480px] flex-col px-0 py-0">
                      <DialogHeader
                        className="flex h-16 justify-center rounded-b-xl rounded-t-lg bg-gray-50
                 px-6 dark:border dark:border-neutral-800 dark:bg-neutral-900"
                      >
                        <DialogTitle className="text-xl">
                          Create Team
                        </DialogTitle>
                      </DialogHeader>
                      <div className="mb-2 mt-4 flex flex-col gap-2 px-6">
                        <label className="text-sm text-gray-500">
                          Team Name
                        </label>
                        <Input placeholder="Team name..." />
                      </div>
                      <RadioGroup
                        className="mb-2 ml-auto mr-auto flex w-full gap-4 px-6"
                        defaultValue={
                          selectedValue === "free-trial"
                            ? "free-trial2"
                            : "pro2"
                        }
                      >
                        <label
                          htmlFor="free-trial2"
                          className="w-full cursor-pointer"
                        >
                          <div
                            className={`flex items-center justify-between rounded-lg border border-gray-200
                       px-4 py-4 dark:bg-transparent ${
                         selectedValue === "free-trial"
                           ? "border-blue-600 bg-blue-200 dark:border-blue-500"
                           : "dark:border-gray-800"
                       }`}
                          >
                            <div>
                              <h1 className="mb-2 font-medium">Pro Trial</h1>
                              <p className="text-sm text-gray-500">
                                Free for two weeks
                              </p>
                            </div>
                            <RadioGroupItem
                              value="free-trial2"
                              id="free-trial2"
                              className={
                                selectedValue === "free-trial"
                                  ? "bg-blue-500 text-white"
                                  : "border-gray-300"
                              }
                              onClick={() => setSelectedValue("free-trial")}
                            />
                          </div>
                        </label>
                        <label htmlFor="pro2" className="w-full cursor-pointer">
                          <div
                            className={`flex items-center justify-between rounded-lg border border-gray-200
                       px-4 py-4 dark:bg-transparent ${
                         selectedValue === "pro"
                           ? "border-blue-500 bg-blue-200 dark:border-blue-500"
                           : "dark:border-gray-800"
                       }`}
                          >
                            <div>
                              <h1 className="mb-2 font-medium">Pro</h1>
                              <p className="text-sm text-gray-500">
                                Get started now
                              </p>
                            </div>
                            <RadioGroupItem
                              value="pro2"
                              id="pro2"
                              className={
                                selectedValue === "pro"
                                  ? "bg-blue-500 text-white"
                                  : "border-gray-300"
                              }
                              onClick={() => setSelectedValue("pro")}
                            />
                          </div>
                        </label>
                      </RadioGroup>
                      <Collapsible className="mb-4 px-6">
                        <CollapsibleTrigger
                          className="flex items-center gap-2 text-sm font-medium"
                          onClick={() => setContentExpanded(!contentExpanded)}
                        >
                          {!contentExpanded && (
                            <ChevronRightIcon className="h-5 w-5 text-gray-500" />
                          )}
                          {contentExpanded && (
                            <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                          )}
                          {selectedValue === "free-trial"
                            ? "Continuing will start a 14-day Pro plan trial"
                            : "Continuing will start a monthly Pro plan subscription"}
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-2 px-7 text-sm">
                          <p className="mb-2">
                            Creating a new team will not affect your Personal
                            Account (Hobby) or any of its projects.
                          </p>
                          <a
                            href="https://vercel.com/docs/accounts/plans/pro/trials"
                            alt="vercel docs pro plan"
                            target="_blank"
                            className="flex w-fit items-center gap-1 font-medium
                       text-blue-600 hover:border-b hover:border-blue-600"
                          >
                            Learn More
                            <ExternalLinkIcon className="font-medium" />
                          </a>
                        </CollapsibleContent>
                      </Collapsible>
                      <div
                        className="flex justify-between border-t bg-gray-100 px-4 py-4
                 dark:border-gray-700 dark:bg-neutral-900"
                      >
                        <Button
                          variant="outline"
                          onClick={() => setIsTeamDialogOpen2(false)}
                        >
                          Cancel
                        </Button>
                        <Button onClick={() => setIsTeamDialogOpen2(false)}>
                          Continue
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <DialogTrigger className="w-full">
                    <ContextMenuItem>View Code</ContextMenuItem>
                  </DialogTrigger>
                </ContextMenuContent>
              </ContextMenu>
              <ViewCode
                installation={`shadcn-ui@latest dialog dropdown select radio-group collapsible button`}
                installation2={`install @radix-ui/react-icons lucide-react next-themes`}
                details={`look into 
                <a href="https://ui.shadcn.com/docs/dark-mode/next" target="_blank" class="text-blue-500">
                https://ui.shadcn.com/docs/dark-mode/next<a> to incoporate the themes, step 1 and 2`}
                imports={`import { useTheme } from "next-themes"
import { 
Dialog,
DialogTrigger,
DialogContent,
DialogHeader,
DialogTitle
} from "@/components/ui/dialog"
import {
DropdownMenu,
DropdownMenuTrigger,
DropdownMenuContent,
DropdownMenuItem,
DropdownMenuSeparator,
DropdownMenuShortcut
} from "@/components/ui/dropdown-menu"
import { Select,
SelectTrigger,
SelectContent,
SelectItem,
SelectValue
} from "@/components/ui/select"
import { 
RadioGroup,
RadioGroupItem
} from "@/components/ui/radio-group"
import {
Collapsible,
CollapsibleTrigger,
CollapsibleContent
} from "@/components/ui/collapsible"
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandEmpty,
} from "@/components/ui/command"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
ExternalLinkIcon,
ChevronRightIcon,
ChevronDownIcon,
PlusIcon,
} from "@radix-ui/react-icons"
import { Monitor } from "lucide-react"
import * as React from "react"`}
                consts={`const [isTeamDialogOpen2, setIsTeamDialogOpen2] = React.useState(false)
const [selectedValue, setSelectedValue] = React.useState("free-trial")
const [contentExpanded, setContentExpanded] = React.useState(false)
const [placeholder, setPlaceHolder] = React.useState("system")
const [open, setOpen] = React.useState(false)
const { setTheme } = useTheme()

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

React.useEffect(() => {
  const down = (e) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpen((open) => !open)
    }
  }

  document.addEventListener("keydown", down)
  return () => document.removeEventListener("keydown", down)
}, [])

`}
                code={`<Dialog open={isTeamDialogOpen2} onOpenChange={setIsTeamDialogOpen2}>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Avatar className="h-[32px] w-[32px]">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="mr-7 mt-2 h-[435px] w-[250px] rounded-xl px-4">
      <DropdownMenuItem className="mt-3 text-gray-500">
        example@gmail.com
      </DropdownMenuItem>
      <a
        href="https://vercel.com/Dashboard"
        alt="vercel website home section"
        className="w-full"
        target="_blank"
      >
        <DropdownMenuItem className="mt-1 text-gray-500">
          Dashboard
        </DropdownMenuItem>
      </a>
      <DropdownMenuItem className="mt-1 text-gray-500">
        Settings
      </DropdownMenuItem>
      <DialogTrigger
        className="w-full"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <DropdownMenuItem className="mt-1 text-gray-500">
          <div className="flex w-full items-center justify-between">
            <h1>New Team</h1>
            <PlusIcon className="mr-2 h-4 w-4" />
          </div>
        </DropdownMenuItem>
      </DialogTrigger>
      <DropdownMenuSeparator className="mb-3 mt-3" />
      <DropdownMenuItem
        className="mt-1 flex justify-between text-gray-500"
        onClick={() => setOpen((prev) => !prev)}
      >
        Command Menu
        <div className="flex gap-1">
          <kbd>
            <DropdownMenuShortcut
              className="flex h-7 w-8 items-center justify-center rounded-md border
            border-gray-200 px-2 font-sans text-black opacity-100 dark:border-gray-800 dark:text-white"
            >
              Ctrl
            </DropdownMenuShortcut>
          </kbd>
          <kbd>
            <DropdownMenuShortcut
              className="flex h-7 w-6 items-center justify-center rounded-md
              border border-gray-200 font-sans text-black opacity-100 dark:border-gray-800 dark:text-white"
            >
              K
            </DropdownMenuShortcut>
          </kbd>
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem className="mt-1 flex justify-between text-gray-500">
        Theme
        <Select
          onValueChange={(value) => {
            setTheme(value);
            setPlaceHolder(value);
          }}
        >
          <SelectTrigger className="h-6 w-24 bg-gray-50 px-2 text-xs text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <Monitor className="h-3 w-3 text-gray-500" />
              <SelectValue placeholder={capitalizeFirstLetter(placeholder)} />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="system" className="text-xs">
              System
            </SelectItem>
            <SelectItem value="light" className="text-xs">
              Light
            </SelectItem>
            <SelectItem value="dark" className="text-xs">
              Dark
            </SelectItem>
          </SelectContent>
        </Select>
      </DropdownMenuItem>
      <DropdownMenuSeparator className="mb-3 mt-3" />
      <DropdownMenuItem className="text-gray-500">
        <a
          href="https://vercel.com/home"
          alt="vercel website home section"
          className="w-full"
          target="_blank"
        >
          <div className="flex w-full items-center justify-between">
            <h1>Vercel Homepage</h1>
            <ExternalLinkIcon className="mr-2 h-4 w-4" />
          </div>
        </a>
      </DropdownMenuItem>
      <DropdownMenuItem className="mt-1 text-gray-500">
        Log out
      </DropdownMenuItem>
      <DropdownMenuSeparator className="mb-3 mt-3" />
      <DropdownMenuItem>
        <Button className="h-[32px] w-full py-0">Upgrade to Pro</Button>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  <DialogContent className="flex w-[480px] flex-col px-0 py-0">
    <DialogHeader
      className="flex h-16 justify-center rounded-b-xl rounded-t-lg bg-gray-50
      px-6 dark:border dark:border-neutral-800 dark:bg-neutral-900"
    >
      <DialogTitle className="text-xl">Create Team</DialogTitle>
    </DialogHeader>
    <div className="mb-2 mt-4 flex flex-col gap-2 px-6">
      <label className="text-sm text-gray-500">Team Name</label>
      <Input placeholder="Team name..." />
    </div>
    <RadioGroup
      className="mb-2 ml-auto mr-auto flex w-full gap-4 px-6"
      defaultValue={selectedValue === "free-trial" ? "free-trial2" : "pro2"}
    >
      <label htmlFor="free-trial2" className="w-full cursor-pointer">
        <div
          className={\`flex items-center justify-between rounded-lg border border-gray-200
          px-4 py-4 dark:bg-transparent \${
            selectedValue === "free-trial"
                ? "border-blue-600 bg-blue-200 dark:border-blue-500"
                : "dark:border-gray-800"
          }\`}
        >
          <div>
            <h1 className="mb-2 font-medium">Pro Trial</h1>
            <p className="text-sm text-gray-500">Free for two weeks</p>
          </div>
          <RadioGroupItem
            value="free-trial2"
            id="free-trial2"
            className={
              selectedValue === "free-trial"
                ? "bg-blue-500 text-white"
                : "border-gray-300"
            }
            onClick={() => setSelectedValue("free-trial")}
          />
        </div>
      </label>
      <label htmlFor="pro2" className="w-full cursor-pointer">
        <div
          className={\`flex items-center justify-between rounded-lg border border-gray-200
          px-4 py-4 dark:bg-transparent \${
            selectedValue === "pro"
              ? "border-blue-500 bg-blue-200 dark:border-blue-500"
              : "dark:border-gray-800"
            }\`}
        >
          <div>
            <h1 className="mb-2 font-medium">Pro</h1>
            <p className="text-sm text-gray-500">Get started now</p>
          </div>
          <RadioGroupItem
            value="pro2"
            id="pro2"
            className={
              selectedValue === "pro"
                ? "bg-blue-500 text-white"
                : "border-gray-300"
            }
            onClick={() => setSelectedValue("pro")}
          />
        </div>
      </label>
    </RadioGroup>
    <Collapsible className="mb-4 px-6">
      <CollapsibleTrigger
        className="flex items-center gap-2 text-sm font-medium"
        onClick={() => setContentExpanded(!contentExpanded)}
      >
        {!contentExpanded && (
          <ChevronRightIcon className="h-5 w-5 text-gray-500" />
        )}
        {contentExpanded && (
          <ChevronDownIcon className="h-5 w-5 text-gray-500" />
        )}
        {selectedValue === "free-trial"
          ? "Continuing will start a 14-day Pro plan trial"
          : "Continuing will start a monthly Pro plan subscription"}
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2 px-7 text-sm">
        <p className="mb-2">
          Creating a new team will not affect your Personal Account (Hobby) or
          any of its projects.
        </p>
        <a
          href="https://vercel.com/docs/accounts/plans/pro/trials"
          alt="vercel docs pro plan"
          target="_blank"
          className="flex w-fit items-center gap-1 font-medium
        text-blue-600 hover:border-b hover:border-blue-600"
        >
          Learn More
          <ExternalLinkIcon className="font-medium" />
        </a>
      </CollapsibleContent>
    </Collapsible>
    <div
      className="flex justify-between border-t bg-gray-100 px-4 py-4
    dark:border-gray-700 dark:bg-neutral-900"
    >
      <Button variant="outline" onClick={() => setIsTeamDialogOpen2(false)}>
        Cancel
      </Button>
      <Button onClick={() => setIsTeamDialogOpen2(false)}>Continue</Button>
    </div>
  </DialogContent>
</Dialog>
<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>`}
              />
            </Dialog>
          </div>
        </div>
      </nav>
      <main>
        <Tabs
          defaultValue="overview"
          value={activeTab}
          onChange={(tab) => setActiveTab(tab)}
        >
          <Dialog>
            <ContextMenu>
              <ContextMenuTrigger>
                <TabsList
                  className="w-full items-start justify-start gap-1 bg-transparent
           px-4 py-0 dark:bg-black"
                >
                  <TabsTrigger
                    value="overview"
                    className="relative flex h-full items-start py-1.5 font-normal
               after:absolute after:bottom-0 after:h-[2px]
                after:w-10/12 after:content-[''] hover:bg-gray-200 hover:text-neutral-800 data-[state=active]:shadow-none
               after:data-[state=active]:bg-black hover:data-[state=inactive]:rounded-md hover:dark:bg-neutral-800 dark:hover:text-white
                data-[state=active]:dark:bg-transparent after:data-[state=active]:dark:bg-white"
                    onClick={() => setActiveTab("overview")}
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="storage"
                    className="relative flex h-full items-start py-1.5 font-normal
               after:absolute after:bottom-0 after:h-[2px] after:w-10/12
                after:content-[''] hover:bg-gray-200 hover:text-neutral-800 data-[state=active]:shadow-none after:data-[state=active]:bg-black
                 hover:data-[state=inactive]:rounded-md hover:dark:bg-neutral-800 dark:hover:text-white data-[state=active]:dark:bg-transparent after:data-[state=active]:dark:bg-white"
                    onClick={() => setActiveTab("storage")}
                  >
                    Storage
                  </TabsTrigger>
                  <TabsTrigger
                    value="settings"
                    className="relative flex h-full items-start py-1.5 font-normal
               after:absolute after:bottom-0 after:h-[2px] after:w-10/12
                after:content-[''] hover:bg-gray-200 hover:text-neutral-800 data-[state=active]:shadow-none after:data-[state=active]:bg-black
                 hover:data-[state=inactive]:rounded-md hover:dark:bg-neutral-800 dark:hover:text-white data-[state=active]:dark:bg-transparent after:data-[state=active]:dark:bg-white"
                    onClick={() => setActiveTab("settings")}
                  >
                    Settings
                  </TabsTrigger>
                </TabsList>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <DialogTrigger className="w-full">
                  <ContextMenuItem>View Code</ContextMenuItem>
                </DialogTrigger>
              </ContextMenuContent>
            </ContextMenu>
            <ViewCode
              installation={`shadcn-ui@latest add tabs`}
              imports={`import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import * as React from "react"`}
              consts={`const [activeTab, setActiveTab] = React.useState("overview")

`}
              code={`<Tabs
  defaultValue="overview"
  value={activeTab}
  onChange={(tab) => setActiveTab(tab)}
>
  <TabsList
    className="w-full items-start justify-start gap-1 bg-transparent
    px-4 py-0 dark:bg-black"
  >
    <TabsTrigger
      value="overview"
      className="relative flex h-full items-start py-1.5 font-normal
      after:absolute after:bottom-0 after:h-[2px]
      after:w-10/12 after:content-[''] hover:bg-gray-200 hover:text-neutral-800 data-[state=active]:shadow-none
    after:data-[state=active]:bg-black hover:data-[state=inactive]:rounded-md hover:dark:bg-neutral-800 dark:hover:text-white
      data-[state=active]:dark:bg-transparent after:data-[state=active]:dark:bg-white"
      onClick={() => setActiveTab("overview")}
    >
      Overview
    </TabsTrigger>
    <TabsTrigger
      value="storage"
      className="relative flex h-full items-start py-1.5 font-normal
      after:absolute after:bottom-0 after:h-[2px] after:w-10/12
      after:content-[''] hover:bg-gray-200 hover:text-neutral-800 data-[state=active]:shadow-none after:data-[state=active]:bg-black
      hover:data-[state=inactive]:rounded-md hover:dark:bg-neutral-800 dark:hover:text-white data-[state=active]:dark:bg-transparent after:data-[state=active]:dark:bg-white"
      onClick={() => setActiveTab("storage")}
    >
      Storage
    </TabsTrigger>
    <TabsTrigger
      value="settings"
      className="relative flex h-full items-start py-1.5 font-normal
      after:absolute after:bottom-0 after:h-[2px] after:w-10/12
      after:content-[''] hover:bg-gray-200 hover:text-neutral-800 data-[state=active]:shadow-none after:data-[state=active]:bg-black
      hover:data-[state=inactive]:rounded-md hover:dark:bg-neutral-800 dark:hover:text-white data-[state=active]:dark:bg-transparent after:data-[state=active]:dark:bg-white"
      onClick={() => setActiveTab("settings")}
    >
      Settings
    </TabsTrigger>
  </TabsList>
</Tabs>`}
            />
          </Dialog>
          <TabsContent value="overview" className="mt-0">
            <div className="h-[650px] bg-neutral-50 px-6 py-6 dark:bg-transparent 2xl:h-[917px] 2xl:px-96">
              <div>
                <div className="relative mb-2 flex h-8 gap-2">
                  <Dialog>
                    <ContextMenu>
                      <ContextMenuTrigger className="w-full">
                        <Input
                          placeholder="Search..."
                          className="px-12 dark:border-neutral-700 placeholder:dark:text-neutral-600"
                          onChange={(event) => event.stopPropagation()}
                        />
                        <MagnifyingGlassIcon className="absolute left-4 top-2.5 h-5 w-5 text-neutral-400 dark:text-neutral-500" />
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <DialogTrigger className="w-full">
                          <ContextMenuItem>View Code</ContextMenuItem>
                        </DialogTrigger>
                      </ContextMenuContent>
                    </ContextMenu>
                    <ViewCode
                      installation={`shadcn-ui@latest add input`}
                      installation2={`install @radix-ui/react-icons`}
                      imports={`import { Input } from "@/components/ui/input"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"`}
                      code={`<div className="relative w-[800px]">
  <Input
    placeholder="Search..."
    className="px-12 dark:border-neutral-700 placeholder:dark:text-neutral-600"
    onChange={(event) => event.stopPropagation()}
  />
  <MagnifyingGlassIcon className="absolute left-4 top-2.5 h-5 w-5
  text-neutral-400 dark:text-neutral-500" />
</div>`}
                    />
                  </Dialog>

                  <div className="flex gap-0 rounded-md dark:bg-neutral-800">
                    <Button
                      variant="outline"
                      className="box-border h-10 w-11 rounded-r-none border-r-0 px-0"
                    >
                      <DashboardIcon className="h-4 w-4" />
                    </Button>
                    <Button
                      value="option-two"
                      variant="outline"
                      className="box-border h-10 w-11 rounded-l-none border-l-0 px-0"
                    >
                      <ListBulletIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  <Dialog>
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <Dialog
                          open={isTeamDialogOpen3}
                          onOpenChange={setIsTeamDialogOpen3}
                        >
                          <DropdownMenu>
                            <DropdownMenuTrigger className="border-box flex w-[128px] justify-between">
                              <Button className="border-box flex w-[128px] justify-between">
                                Add New..
                                <ChevronDownIcon className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="mt-3 h-[176px] rounded-xl pt-2">
                              <DropdownMenuItem className="h-1/4 rounded-md">
                                Project
                              </DropdownMenuItem>
                              <DropdownMenuItem className="h-1/4 rounded-md">
                                Domain
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                className="h-1/4 rounded-md"
                                onClick={() => setActiveTab("storage")}
                              >
                                Storage
                              </DropdownMenuItem>
                              <DialogTrigger className="w-full">
                                <DropdownMenuItem className="h-1/4 rounded-md">
                                  Team
                                </DropdownMenuItem>
                              </DialogTrigger>
                            </DropdownMenuContent>
                          </DropdownMenu>
                          <DialogContent className="flex w-[480px] flex-col px-0 py-0">
                            <DialogHeader
                              className="flex h-16 justify-center rounded-b-xl rounded-t-lg bg-gray-50 px-6
                       dark:border dark:border-neutral-800 dark:bg-neutral-900"
                            >
                              <DialogTitle className="text-xl">
                                Create Team
                              </DialogTitle>
                            </DialogHeader>
                            <div className="mb-2 mt-4 flex flex-col gap-2 px-6">
                              <label className="text-sm text-gray-500">
                                Team Name
                              </label>
                              <Input
                                placeholder="Team name..."
                                onChange={(event) => event.stopPropagation()}
                              />
                            </div>
                            <RadioGroup
                              className="mb-2 ml-auto mr-auto flex w-full gap-4 px-6"
                              defaultValue={
                                selectedValue === "free-trial"
                                  ? "free-trial3"
                                  : "pro3"
                              }
                            >
                              <label
                                htmlFor="free-trial3"
                                className="w-full cursor-pointer"
                              >
                                <div
                                  className={`flex items-center justify-between rounded-lg border border-gray-200 px-4
                             py-4 dark:bg-transparent ${
                               selectedValue === "free-trial"
                                 ? "border-blue-600 bg-blue-200 dark:border-blue-500"
                                 : "dark:border-gray-800"
                             }`}
                                >
                                  <div>
                                    <h1 className="mb-2 font-medium">
                                      Pro Trial
                                    </h1>
                                    <p className="text-sm text-gray-500">
                                      Free for two weeks
                                    </p>
                                  </div>
                                  <RadioGroupItem
                                    value="free-trial3"
                                    id="free-trial3"
                                    className={
                                      selectedValue === "free-trial"
                                        ? "bg-blue-500 text-white"
                                        : "border-gray-300"
                                    }
                                    onClick={() =>
                                      setSelectedValue("free-trial")
                                    }
                                  />
                                </div>
                              </label>
                              <label
                                htmlFor="pro3"
                                className="w-full cursor-pointer"
                              >
                                <div
                                  className={`flex items-center justify-between rounded-lg border border-gray-200 px-4
                             py-4 dark:bg-transparent ${
                               selectedValue === "pro"
                                 ? "border-blue-600 bg-blue-200 dark:border-blue-500"
                                 : "dark:border-gray-800"
                             }`}
                                >
                                  <div>
                                    <h1 className="mb-2 font-medium">Pro</h1>
                                    <p className="text-sm text-gray-500">
                                      Get started now
                                    </p>
                                  </div>
                                  <RadioGroupItem
                                    value="pro3"
                                    id="pro3"
                                    className={
                                      selectedValue === "pro"
                                        ? "bg-blue-500 text-white"
                                        : "border-gray-300"
                                    }
                                    onClick={() => setSelectedValue("pro")}
                                  />
                                </div>
                              </label>
                            </RadioGroup>
                            <Collapsible className="mb-4 px-6">
                              <CollapsibleTrigger
                                className="flex items-center gap-2 text-sm font-medium"
                                onClick={() =>
                                  setContentExpanded(!contentExpanded)
                                }
                              >
                                {!contentExpanded && (
                                  <ChevronRightIcon className="h-5 w-5 text-gray-500" />
                                )}
                                {contentExpanded && (
                                  <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                                )}
                                {selectedValue === "free-trial"
                                  ? "Continuing will start a 14-day Pro plan trial"
                                  : "Continuing will start a monthly Pro plan subscription"}
                              </CollapsibleTrigger>
                              <CollapsibleContent className="mt-2 px-7 text-sm">
                                <p className="mb-2">
                                  Creating a new team will not affect your
                                  Personal Account (Hobby) or any of its
                                  projects.
                                </p>
                                <a
                                  href="https://vercel.com/docs/accounts/plans/pro/trials"
                                  alt="vercel docs pro plan"
                                  target="_blank"
                                  className="flex w-fit items-center gap-1 font-medium text-blue-600
                             hover:border-b hover:border-blue-600"
                                >
                                  Learn More
                                  <ExternalLinkIcon className="font-medium" />
                                </a>
                              </CollapsibleContent>
                            </Collapsible>
                            <div
                              className="flex justify-between border-t bg-gray-100 px-4 py-4 dark:border-gray-700
                       dark:bg-neutral-900"
                            >
                              <Button
                                variant="outline"
                                onClick={() => setIsTeamDialogOpen3(false)}
                              >
                                Cancel
                              </Button>
                              <Button
                                onClick={() => setIsTeamDialogOpen3(false)}
                              >
                                Continue
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <DialogTrigger className="w-full">
                          <ContextMenuItem>View Code</ContextMenuItem>
                        </DialogTrigger>
                      </ContextMenuContent>
                    </ContextMenu>
                    <ViewCode
                      installation={`shadcn-ui@latest add dialog dropdown-menu button radio-group collapsible`}
                      installation2={`install @radix-ui/react-icons`}
                      imports={`import {
Dialog,
DialogTrigger,
DialogContent,
DialogHeader,
DialogTitle
} from "@/components/ui/dialog"
import {
DropdownMenu,
DropdownMenuTrigger,
DropdownMenuContent,
DropdownMenuItem
} from "@/components/ui/dropdown-menu"
import {
Collapsible,
CollapsibleTrigger,
CollapsibleContent
} from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { ChevronDownIcon, ChevronRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons"
import * as React from "react"`}
                      consts={`const [isTeamDialogOpen3, setIsTeamDialogOpen3] = React.useState(false)
const [selectedValue, setSelectedValue] = React.useState("free-trial")
const [contentExpanded, setContentExpanded] = React.useState(false)

`}
                      code={`<Dialog open={isTeamDialogOpen3} onOpenChange={setIsTeamDialogOpen3}>
  <DropdownMenu>
      <DropdownMenuTrigger className="border-box flex w-[128px] justify-between">
        <Button className="border-box flex w-[128px] justify-between">
          Add New..
          <ChevronDownIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-3 h-[176px] rounded-xl pt-2">
        <DropdownMenuItem className="h-1/4 rounded-md">Project</DropdownMenuItem>
        <DropdownMenuItem className="h-1/4 rounded-md">Domain</DropdownMenuItem>
        <DropdownMenuItem
          className="h-1/4 rounded-md"
          onClick={() => setActiveTab("storage")}
        >
          Storage
        </DropdownMenuItem>
        <DialogTrigger className="w-full">
          <DropdownMenuItem className="h-1/4 rounded-md">Team</DropdownMenuItem>
        </DialogTrigger>
      </DropdownMenuContent>
    </DropdownMenu>
    <DialogContent className="flex w-[480px] flex-col px-0 py-0">
      <DialogHeader
        className="flex h-16 justify-center rounded-b-xl rounded-t-lg bg-gray-50 px-6
        dark:border dark:border-neutral-800 dark:bg-neutral-900"
      >
        <DialogTitle className="text-xl">Create Team</DialogTitle>
      </DialogHeader>
      <div className="mb-2 mt-4 flex flex-col gap-2 px-6">
        <label className="text-sm text-gray-500">Team Name</label>
        <Input
          placeholder="Team name..."
          onChange={(event) => event.stopPropagation()}
        />
      </div>
      <RadioGroup
        className="mb-2 ml-auto mr-auto flex w-full gap-4 px-6"
        defaultValue={selectedValue === "free-trial" ? "free-trial3" : "pro3"}
      >
        <label htmlFor="free-trial3" className="w-full cursor-pointer">
          <div
            className={\`flex items-center justify-between rounded-lg border border-gray-200 px-4
            py-4 dark:bg-transparent \${
              selectedValue === "free-trial"
                ? "border-blue-600 bg-blue-200 dark:border-blue-500"
                : "dark:border-gray-800"
            }\`}
          >
            <div>
              <h1 className="mb-2 font-medium">Pro Trial</h1>
              <p className="text-sm text-gray-500">Free for two weeks</p>
            </div>
            <RadioGroupItem
              value="free-trial3"
              id="free-trial3"
              className={
                selectedValue === "free-trial"
                  ? "bg-blue-500 text-white"
                  : "border-gray-300"
              }
              onClick={() => setSelectedValue("free-trial")}
            />
          </div>
        </label>
        <label htmlFor="pro3" className="w-full cursor-pointer">
          <div
            className={\`flex items-center justify-between rounded-lg border border-gray-200 px-4
            py-4 dark:bg-transparent \${
              selectedValue === "pro"
                ? "border-blue-600 bg-blue-200 dark:border-blue-500"
                : "dark:border-gray-800"
              }\`}
          >
            <div>
              <h1 className="mb-2 font-medium">Pro</h1>
              <p className="text-sm text-gray-500">Get started now</p>
            </div>
            <RadioGroupItem
              value="pro3"
              id="pro3"
              className={
                selectedValue === "pro"
                  ? "bg-blue-500 text-white"
                  : "border-gray-300"
              }
              onClick={() => setSelectedValue("pro")}
            />
          </div>
        </label>
      </RadioGroup>
      <Collapsible className="mb-4 px-6">
        <CollapsibleTrigger
          className="flex items-center gap-2 text-sm font-medium"
          onClick={() => setContentExpanded(!contentExpanded)}
        >
          {!contentExpanded && (
            <ChevronRightIcon className="h-5 w-5 text-gray-500" />
          )}
          {contentExpanded && (
            <ChevronDownIcon className="h-5 w-5 text-gray-500" />
          )}
          {selectedValue === "free-trial"
            ? "Continuing will start a 14-day Pro plan trial"
            : "Continuing will start a monthly Pro plan subscription"}
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 px-7 text-sm">
          <p className="mb-2">
            Creating a new team will not affect your Personal Account (Hobby) or
            any of its projects.
          </p>
          <a
            href="https://vercel.com/docs/accounts/plans/pro/trials"
            alt="vercel docs pro plan"
            target="_blank"
            className="flex w-fit items-center gap-1 font-medium text-blue-600
            hover:border-b hover:border-blue-600"
          >
            Learn More
            <ExternalLinkIcon className="font-medium" />
          </a>
        </CollapsibleContent>
      </Collapsible>
      <div
        className="flex justify-between border-t bg-gray-100 px-4 py-4 dark:border-gray-700
      dark:bg-neutral-900"
      >
        <Button variant="outline" onClick={() => setIsTeamDialogOpen3(false)}>
          Cancel
        </Button>
        <Button onClick={() => setIsTeamDialogOpen3(false)}>Continue</Button>
      </div>
    </DialogContent>
</Dialog>`}
                    />
                  </Dialog>
                </div>
                <Dialog>
                  <ContextMenu>
                    <ContextMenuTrigger>
                      <div
                        className="mt-8 flex h-[485px] flex-col items-center justify-center gap-8 rounded-lg
                 border bg-white dark:border-neutral-700 dark:bg-black"
                      >
                        <div>
                          <h1 className="mb-2 text-center text-2xl font-medium">
                            No projects, yet!
                          </h1>
                          <p className="text-gray-500 dark:text-neutral-400">
                            Create a project from a Template, or import a Git
                            repository
                          </p>
                        </div>
                        <div></div>
                        <div>
                          <a href="https://vercel.com/new" target="_blank">
                            <Button className="w-50 text-md mr-6 h-12">
                              Create a New Project
                            </Button>
                          </a>
                          <a
                            href="https://vercel.com/new/templates"
                            target="_blank"
                          >
                            <Button className="w-50 text-md h-12">
                              Browse Templates{" "}
                              <MoveRight className="ml-1 h-4 w-4" />
                            </Button>
                          </a>
                        </div>
                      </div>
                    </ContextMenuTrigger>
                    <ContextMenuContent>
                      <DialogTrigger className="w-full">
                        <ContextMenuItem>View Code</ContextMenuItem>
                      </DialogTrigger>
                    </ContextMenuContent>
                  </ContextMenu>
                  <ViewCode
                    installation={`shadcn-ui@latest add button`}
                    installation2={`install lucide-react`}
                    imports={`import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"`}
                    code={`<div
  className="mt-8 flex h-[485px] flex-col items-center justify-center gap-8 rounded-lg
  border bg-white dark:border-neutral-700 dark:bg-black w-full"
>
  <div>
    <h1 className="mb-2 text-center text-2xl font-medium">No projects, yet!</h1>
    <p className="text-gray-500 dark:text-neutral-400">
      Create a project from a Template, or import a Git repository
    </p>
  </div>
  <div></div>
  <div>
    <a href="https://vercel.com/new" target="_blank">
      <Button className="w-50 text-md mr-6 h-12">Create a New Project</Button>
    </a>
    <a href="https://vercel.com/new/templates" target="_blank">
      <Button className="w-50 text-md h-12">
        Browse Templates <MoveRight className="ml-1 h-4 w-4" />
      </Button>
    </a>
  </div>
</div>`}
                  />
                </Dialog>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="storage" className="mt-0">
            <Dialog>
              <ContextMenu>
                <ContextMenuTrigger>
                  <div className="dark:bg-black">
                    <Dialog open={isDataDialog} onOpenChange={setIsDataDialog}>
                      <div className="border-y px-8 py-12 dark:border-neutral-700 2xl:px-80">
                        <div className="flex items-center justify-between">
                          <div>
                            <h1 className="mb-4 text-3xl font-medium">
                              Storage
                            </h1>
                            <p className="text-sm dark:text-neutral-400">
                              Read and write directly to databases and stores
                              from your projects.{" "}
                              <a
                                href="https://vercel.com/docs/storage"
                                className="text-blue-500"
                                target="_blank"
                              >
                                Learn more{" "}
                                <ExternalLinkIcon className="inline" />
                              </a>
                            </p>
                          </div>
                          <div className="flex gap-3">
                            <DialogTrigger>
                              <Button>Create a Database</Button>
                            </DialogTrigger>
                          </div>
                        </div>
                      </div>
                      <div className="px-8 py-8 2xl:px-80">
                        <div
                          className="flex h-[655px] flex-col items-center
                   justify-center gap-4 rounded-md border bg-gray-50 dark:border-neutral-800 dark:bg-neutral-950"
                        >
                          <div className="rounded-xl border border-gray-300 px-3 py-3 dark:border-neutral-800">
                            <Database className="h-8 w-8 dark:text-neutral-400" />
                          </div>
                          <div>
                            <h1 className="mb-2 text-center text-sm">
                              Create a database
                            </h1>
                            <p className="w-96 text-center text-sm dark:text-neutral-400">
                              Create databases and stores that you can connect
                              to your team's projects.
                            </p>
                          </div>
                          <div className="mt-4 flex h-80 w-[450px] flex-col rounded-md border dark:border-neutral-800 dark:bg-black">
                            <div className="flex h-1/4 items-center justify-between border-b px-4 dark:border-neutral-800">
                              <div className="flex items-center gap-2">
                                <Database className="text-neutral-600 dark:text-neutral-400" />
                                <div className="flex flex-col">
                                  <h1 className="text-sm font-medium">
                                    Edge Config
                                  </h1>
                                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    Ultra-low latency reads
                                  </p>
                                </div>
                              </div>
                              <DialogTrigger>
                                <Button variant="outline" className="h-9">
                                  Create
                                </Button>
                              </DialogTrigger>
                            </div>
                            <div
                              className="flex h-1/4 items-center justify-between border-b
                       px-4 dark:border-neutral-800"
                            >
                              <div className="flex items-center gap-2">
                                <Database className="text-neutral-600 dark:text-neutral-400" />
                                <div className="flex flex-col">
                                  <h1 className="text-sm font-medium">KV</h1>
                                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    Durable Redis
                                  </p>
                                </div>
                              </div>
                              <DialogTrigger>
                                <Button variant="outline" className="h-9">
                                  Create
                                </Button>
                              </DialogTrigger>
                            </div>
                            <div
                              className="flex h-1/4 items-center justify-between border-b
                       px-4 dark:border-neutral-800"
                            >
                              <div className="flex items-center gap-2">
                                <Database className="text-neutral-600 dark:text-neutral-400" />
                                <div className="flex flex-col">
                                  <div className="flex items-center gap-2">
                                    <h1 className="text-sm font-medium">
                                      Postgres
                                    </h1>
                                    <Badge
                                      variant="secondary"
                                      className="flex h-6 w-12 justify-center rounded-xl bg-neutral-400
                                 text-white dark:bg-neutral-400 dark:text-neutral-800"
                                    >
                                      Beta
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    Serverless SQL
                                  </p>
                                </div>
                              </div>
                              <DialogTrigger>
                                <Button variant="outline" className="h-9">
                                  Create
                                </Button>
                              </DialogTrigger>
                            </div>
                            <div className="flex h-1/4 items-center justify-between border-b px-4 dark:border-neutral-800">
                              <div className="flex items-center gap-2">
                                <Database className="text-neutral-600 dark:text-neutral-400" />
                                <div className="flex flex-col">
                                  <div className="flex items-center gap-2">
                                    <h1 className="text-sm font-medium">
                                      Blob
                                    </h1>
                                    <Badge
                                      variant="outline"
                                      className="flex h-6 w-14 justify-center rounded-xl"
                                    >
                                      Invite
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    Fast object storage
                                  </p>
                                </div>
                              </div>
                              <DialogTrigger>
                                <Button variant="outline" className="h-9">
                                  Create
                                </Button>
                              </DialogTrigger>
                            </div>
                          </div>
                          <a
                            href="https://vercel.com/integrations#databases"
                            target="_blank"
                          >
                            <div
                              className="flex cursor-pointer items-center justify-between rounded-md border bg-transparent
                       px-4 py-2 hover:bg-white dark:border-neutral-800 hover:dark:bg-black"
                            >
                              <div className="w-[381px]">
                                <h1 className="text-sm font-medium">
                                  Browse Database Integrations
                                </h1>
                                <p className="text-sm text-neutral-600">
                                  Extend your database options even further.
                                </p>
                              </div>
                              <div
                                className="flex h-8 items-center rounded-full
                         bg-neutral-200 px-2 dark:bg-neutral-700"
                              >
                                <ExternalLinkIcon className="h-4 w-4 text-neutral-500" />
                              </div>
                            </div>
                          </a>
                          <a
                            href="https://vercel.com/integrations#databases"
                            target="_blank"
                          >
                            <p
                              className="flex items-center gap-2 rounded-md px-2 py-2
                       text-sm font-semibold text-neutral-600 hover:bg-neutral-200 dark:text-neutral-300 hover:dark:bg-neutral-700"
                            >
                              Learn More <ExternalLinkIcon className="inline" />
                            </p>
                          </a>
                        </div>
                      </div>
                      <DialogContent className="flex flex-col items-center justify-center px-0 py-0">
                        <h1 className="mt-8 text-2xl font-semibold">
                          Create New Database
                        </h1>
                        <p className="text-sm">Choose a storage type</p>
                        <RadioGroup
                          className="w-full px-8"
                          value={selectedOption}
                        >
                          <div className="flex w-full justify-center gap-4">
                            <label htmlFor="edgeconfig" className="w-full">
                              <div
                                className={`flex w-full cursor-pointer flex-col items-center gap-1 rounded-md border px-3
                           py-5 dark:border-neutral-800 hover:dark:border-neutral-600 ${
                             selectedOption === "edgeconfig"
                               ? "border-neutral-600 bg-neutral-50 dark:border-white dark:bg-transparent hover:dark:border-white"
                               : ""
                           }`}
                              >
                                <Database />
                                <h1 className="text-sm font-medium">
                                  Edge Config
                                </h1>
                                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                  Ultra low latency needs
                                </p>
                                <RadioGroupItem
                                  value="edgeconfig"
                                  id="edgeconfig"
                                  className="mt-2"
                                  onClick={() =>
                                    setSelectedOption("edgeconfig")
                                  }
                                />
                              </div>
                            </label>
                            <label htmlFor="kv" className="w-full">
                              <div
                                className={`flex w-full cursor-pointer flex-col items-center gap-1 rounded-md border px-3
                           py-5 dark:border-neutral-800 hover:dark:border-neutral-600 ${
                             selectedOption === "kv"
                               ? "border-neutral-600 bg-neutral-50 dark:border-white dark:bg-transparent hover:dark:border-white"
                               : ""
                           }`}
                              >
                                <Database />
                                <h1 className="text-sm font-medium">KV</h1>
                                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                  Durable Redis
                                </p>
                                <RadioGroupItem
                                  value="kv"
                                  id="kv"
                                  className="mt-2"
                                  onClick={() => setSelectedOption("kv")}
                                />
                              </div>
                            </label>
                          </div>
                          <div className="mt-2 flex w-full justify-center gap-2">
                            <label htmlFor="postgres" className="w-full">
                              <div
                                className={`flex w-full cursor-pointer flex-col items-center gap-1 rounded-md border px-3
                           py-5 dark:border-neutral-800 hover:dark:border-neutral-600 ${
                             selectedOption === "postgres"
                               ? "border-neutral-600 bg-neutral-50 dark:border-white dark:bg-transparent hover:dark:border-white"
                               : ""
                           }`}
                              >
                                <Database />
                                <h1 className="text-sm font-medium">
                                  Postgres
                                </h1>
                                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                  Serverless SQL
                                </p>
                                <RadioGroupItem
                                  value="postgres"
                                  id="postgres"
                                  className="mt-2"
                                  onClick={() => setSelectedOption("postgres")}
                                />
                              </div>
                            </label>
                            <label htmlFor="blob" className="w-full">
                              <div
                                className={`flex w-full cursor-pointer flex-col items-center gap-1 rounded-md border px-3
                           py-5 dark:border-neutral-800 hover:dark:border-neutral-600 ${
                             selectedOption === "blob"
                               ? "border-neutral-600 bg-neutral-50 dark:border-white dark:bg-transparent hover:dark:border-white"
                               : ""
                           }`}
                              >
                                <Database />
                                <h1 className="text-sm font-medium">Blob</h1>
                                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                  Fast object storage
                                </p>
                                <RadioGroupItem
                                  value="blob"
                                  id="blob"
                                  className="mt-2"
                                  onClick={() => setSelectedOption("blob")}
                                />
                              </div>
                            </label>
                          </div>
                        </RadioGroup>
                        <a
                          href="https://vercel.com/integrations#databases"
                          target="_blank"
                          className="w-full px-8"
                        >
                          <div
                            className="flex cursor-pointer items-center justify-between rounded-md
                      border bg-neutral-50 px-4 py-2 hover:bg-white
                      dark:border-neutral-700 dark:bg-neutral-900 hover:dark:bg-black"
                          >
                            <div>
                              <h1 className="text-sm font-medium">
                                Browse Database Integrations
                              </h1>
                              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                Extend your database options even further.
                              </p>
                            </div>
                            <div className="flex h-8 items-center rounded-full bg-neutral-200 px-2 dark:bg-neutral-700">
                              <ExternalLinkIcon className="h-4 w-4 text-neutral-500" />
                            </div>
                          </div>
                        </a>
                        <div className="flex w-full justify-between bg-neutral-100 px-3 py-3 dark:bg-neutral-900">
                          <Button
                            variant="outline"
                            onClick={() => setIsDataDialog(false)}
                          >
                            Cancel
                          </Button>
                          <Button onClick={() => setIsDataDialog(false)}>
                            Continue
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <DialogTrigger className="w-full">
                    <ContextMenuItem>View Code</ContextMenuItem>
                  </DialogTrigger>
                </ContextMenuContent>
              </ContextMenu>
              <ViewCode
                installation={`shadcn-ui@latest add dialog button badge radio-group`}
                installation2={`install lucide-react @radix-ui/react-icons`}
                imports={`import {
Dialog,
DialogTrigger,
DialogContent
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Database } from "lucide-react"
import { ExternalLinkIcon } from "@radix-ui/react-icons"
import * as React from "react"`}
                consts={`const [isDataDialog, setIsDataDialog] = React.useState(false)
const [selectedOption, setSelectedOption] = React.useState("edgeconfig")

`}
                code={`<div className="dark:bg-black">
<Dialog open={isDataDialog} onOpenChange={setIsDataDialog}>
    <div className="border-y px-8 py-12 dark:border-neutral-700 2xl:px-80">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-4 text-3xl font-medium">Storage</h1>
          <p className="text-sm dark:text-neutral-400">
            Read and write directly to databases and stores from your projects.{" "}
            <a
              href="https://vercel.com/docs/storage"
              className="text-blue-500"
              target="_blank"
            >
              Learn more <ExternalLinkIcon className="inline" />
            </a>
          </p>
        </div>
        <div className="flex gap-3">
          <DialogTrigger>
            <Button>Create a Database</Button>
          </DialogTrigger>
        </div>
      </div>
    </div>
    <div className="px-8 py-8 2xl:px-80">
      <div
        className="flex h-[655px] flex-col items-center
        justify-center gap-4 rounded-md border bg-gray-50 dark:border-neutral-800 dark:bg-neutral-950"
      >
        <div className="rounded-xl border border-gray-300 px-3 py-3 dark:border-neutral-800">
          <Database className="h-8 w-8 dark:text-neutral-400" />
        </div>
        <div>
          <h1 className="mb-2 text-center text-sm">Create a database</h1>
          <p className="w-96 text-center text-sm dark:text-neutral-400">
            Create databases and stores that you can connect to your team's
            projects.
          </p>
        </div>
        <div className="mt-4 flex h-80 w-[450px] flex-col rounded-md border dark:border-neutral-800 dark:bg-black">
          <div className="flex h-1/4 items-center justify-between border-b px-4 dark:border-neutral-800">
            <div className="flex items-center gap-2">
              <Database className="text-neutral-600 dark:text-neutral-400" />
              <div className="flex flex-col">
                <h1 className="text-sm font-medium">Edge Config</h1>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Ultra-low latency reads
                </p>
              </div>
            </div>
            <DialogTrigger>
              <Button variant="outline" className="h-9">
                Create
              </Button>
            </DialogTrigger>
          </div>
          <div
            className="flex h-1/4 items-center justify-between border-b
            px-4 dark:border-neutral-800"
          >
            <div className="flex items-center gap-2">
              <Database className="text-neutral-600 dark:text-neutral-400" />
              <div className="flex flex-col">
                <h1 className="text-sm font-medium">KV</h1>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Durable Redis
                </p>
              </div>
            </div>
            <DialogTrigger>
              <Button variant="outline" className="h-9">
                Create
              </Button>
            </DialogTrigger>
          </div>
          <div
            className="flex h-1/4 items-center justify-between border-b
            px-4 dark:border-neutral-800"
          >
            <div className="flex items-center gap-2">
              <Database className="text-neutral-600 dark:text-neutral-400" />
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h1 className="text-sm font-medium">Postgres</h1>
                  <Badge
                    variant="secondary"
                    className="flex h-6 w-12 justify-center rounded-xl bg-neutral-400
                  text-white dark:bg-neutral-400 dark:text-neutral-800"
                  >
                    Beta
                  </Badge>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Serverless SQL
                </p>
              </div>
            </div>
            <DialogTrigger>
              <Button variant="outline" className="h-9">
                Create
              </Button>
            </DialogTrigger>
          </div>
          <div className="flex h-1/4 items-center justify-between border-b px-4 dark:border-neutral-800">
            <div className="flex items-center gap-2">
              <Database className="text-neutral-600 dark:text-neutral-400" />
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h1 className="text-sm font-medium">Blob</h1>
                  <Badge
                    variant="outline"
                    className="flex h-6 w-14 justify-center rounded-xl"
                  >
                    Invite
                  </Badge>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Fast object storage
                </p>
              </div>
            </div>
            <DialogTrigger>
              <Button variant="outline" className="h-9">
                Create
              </Button>
            </DialogTrigger>
          </div>
        </div>
        <a href="https://vercel.com/integrations#databases" target="_blank">
          <div
            className="flex cursor-pointer items-center justify-between rounded-md border bg-transparent
            px-4 py-2 hover:bg-white dark:border-neutral-800 hover:dark:bg-black"
          >
            <div className="w-[381px]">
              <h1 className="text-sm font-medium">
                Browse Database Integrations
              </h1>
              <p className="text-sm text-neutral-600">
                Extend your database options even further.
              </p>
            </div>
            <div
              className="flex h-8 items-center rounded-full
            bg-neutral-200 px-2 dark:bg-neutral-700"
            >
              <ExternalLinkIcon className="h-4 w-4 text-neutral-500" />
            </div>
          </div>
        </a>
        <a href="https://vercel.com/integrations#databases" target="_blank">
          <p
            className="flex items-center gap-2 rounded-md px-2 py-2
            text-sm font-semibold text-neutral-600 hover:bg-neutral-200 dark:text-neutral-300 hover:dark:bg-neutral-700"
          >
            Learn More <ExternalLinkIcon className="inline" />
          </p>
        </a>
      </div>
    </div>
    <DialogContent className="flex flex-col items-center justify-center px-0 py-0">
      <h1 className="mt-8 text-2xl font-semibold">Create New Database</h1>
      <p className="text-sm">Choose a storage type</p>
      <RadioGroup className="w-full px-8" value={selectedOption}>
        <div className="flex w-full justify-center gap-4">
          <label htmlFor="edgeconfig" className="w-full">
            <div
              className={\`flex w-full cursor-pointer flex-col items-center gap-1 rounded-md border px-3
              py-5 dark:border-neutral-800 hover:dark:border-neutral-600 \${
                selectedOption === "edgeconfig"
                  ? "border-neutral-600 bg-neutral-50 dark:border-white dark:bg-transparent hover:dark:border-white"
                  : ""
                }\`}
            >
              <Database />
              <h1 className="text-sm font-medium">Edge Config</h1>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Ultra low latency needs
              </p>
              <RadioGroupItem
                value="edgeconfig"
                id="edgeconfig"
                className="mt-2"
                onClick={() => setSelectedOption("edgeconfig")}
              />
            </div>
          </label>
          <label htmlFor="kv" className="w-full">
            <div
              className={\`flex w-full cursor-pointer flex-col items-center gap-1 rounded-md border px-3
              py-5 dark:border-neutral-800 hover:dark:border-neutral-600 \${
                selectedOption === "kv"
                  ? "border-neutral-600 bg-neutral-50 dark:border-white dark:bg-transparent hover:dark:border-white"
                  : ""
              }\`}
            >
              <Database />
              <h1 className="text-sm font-medium">KV</h1>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Durable Redis
              </p>
              <RadioGroupItem
                value="kv"
                id="kv"
                className="mt-2"
                onClick={() => setSelectedOption("kv")}
              />
            </div>
          </label>
        </div>
        <div className="mt-2 flex w-full justify-center gap-2">
          <label htmlFor="postgres" className="w-full">
            <div
              className={\`flex w-full cursor-pointer flex-col items-center gap-1 rounded-md border px-3
              py-5 dark:border-neutral-800 hover:dark:border-neutral-600 \${
                selectedOption === "postgres"
                  ? "border-neutral-600 bg-neutral-50 dark:border-white dark:bg-transparent hover:dark:border-white"
                  : ""
              }\`}
            >
              <Database />
              <h1 className="text-sm font-medium">Postgres</h1>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Serverless SQL
              </p>
              <RadioGroupItem
                value="postgres"
                id="postgres"
                className="mt-2"
                onClick={() => setSelectedOption("postgres")}
              />
            </div>
          </label>
          <label htmlFor="blob" className="w-full">
            <div
              className={\`flex w-full cursor-pointer flex-col items-center gap-1 rounded-md border px-3
              py-5 dark:border-neutral-800 hover:dark:border-neutral-600 \${
                selectedOption === "blob"
                  ? "border-neutral-600 bg-neutral-50 dark:border-white dark:bg-transparent hover:dark:border-white"
                  : ""
              }\`}
            >
              <Database />
              <h1 className="text-sm font-medium">Blob</h1>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Fast object storage
              </p>
              <RadioGroupItem
                value="blob"
                id="blob"
                className="mt-2"
                onClick={() => setSelectedOption("blob")}
              />
            </div>
          </label>
        </div>
      </RadioGroup>
      <a
        href="https://vercel.com/integrations#databases"
        target="_blank"
        className="w-full px-8"
      >
        <div
          className="flex cursor-pointer items-center justify-between rounded-md
          border bg-neutral-50 px-4 py-2 hover:bg-white
        dark:border-neutral-700 dark:bg-neutral-900 hover:dark:bg-black"
        >
          <div>
            <h1 className="text-sm font-medium">
              Browse Database Integrations
            </h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Extend your database options even further.
            </p>
          </div>
          <div className="flex h-8 items-center rounded-full bg-neutral-200 px-2 dark:bg-neutral-700">
            <ExternalLinkIcon className="h-4 w-4 text-neutral-500" />
          </div>
        </div>
      </a>
      <div className="flex w-full justify-between bg-neutral-100 px-3 py-3 dark:bg-neutral-900">
        <Button variant="outline" onClick={() => setIsDataDialog(false)}>
          Cancel
        </Button>
        <Button onClick={() => setIsDataDialog(false)}>Continue</Button>
      </div>
    </DialogContent>
  </Dialog>
</div>`}
              />
            </Dialog>
          </TabsContent>
          <TabsContent value="settings" className="mt-0">
            <div className="dark:bg-black">
              <div className="border-y px-8 py-12 dark:border-neutral-700 2xl:px-80">
                <h1 className="mb-4 text-3xl font-medium">
                  Personal Account Settings
                </h1>
              </div>
              <div className="px-8 py-8 2xl:px-80">
                <Tabs
                  className="flex items-start gap-40"
                  defaultValue="general"
                >
                  <Dialog>
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <TabsList
                          className="flex flex-col items-start justify-start gap-2 bg-transparent py-2
                   dark:bg-transparent"
                        >
                          <TabsTrigger
                            value="general"
                            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none
                       data-[state=active]:dark:bg-transparent"
                          >
                            General
                          </TabsTrigger>
                          <TabsTrigger
                            value="notifications"
                            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none
                       data-[state=active]:dark:bg-transparent"
                          >
                            My Notifications
                          </TabsTrigger>
                        </TabsList>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <DialogTrigger className="w-full">
                          <ContextMenuItem>View Code</ContextMenuItem>
                        </DialogTrigger>
                      </ContextMenuContent>
                    </ContextMenu>
                    <ViewCode
                      installation={`shadcn-ui@latest add tabs`}
                      imports={`import { Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs"`}
                      code={`<Tabs 
  className="flex items-start gap-40"
  defaultValue="general"
>
  <TabsList
    className="flex flex-col items-start justify-start gap-2 bg-transparent py-2
    dark:bg-transparent"
  >
    <TabsTrigger
      value="general"
      className="data-[state=active]:bg-transparent data-[state=active]:shadow-none
      data-[state=active]:dark:bg-transparent"
    >
      General
    </TabsTrigger>
    <TabsTrigger
      value="notifications"
      className="data-[state=active]:bg-transparent data-[state=active]:shadow-none
      data-[state=active]:dark:bg-transparent"
    >
      My Notifications
    </TabsTrigger>
  </TabsList>
</Tabs>`}
                    />
                  </Dialog>
                  <TabsContent
                    value="general"
                    className="flex w-full flex-col gap-8 data-[state=inactive]:hidden"
                  >
                    <Dialog>
                      <ContextMenu>
                        <ContextMenuTrigger>
                          <div>
                            <div
                              className="flex flex-col gap-3 rounded-lg rounded-b-none border border-neutral-200 px-6
                       py-6 dark:border-neutral-800 dark:bg-neutral-950"
                            >
                              <h1 className="text-xl font-semibold">
                                Your Username
                              </h1>
                              <p className="text-sm">
                                This is your URL namespace within vercel
                              </p>
                              <div className="flex w-72">
                                <div
                                  className="flex items-center rounded-lg rounded-r-none border
                           bg-neutral-100 px-2 dark:border-neutral-800 dark:bg-neutral-900"
                                >
                                  <p className="text-sm text-neutral-400 dark:text-neutral-500">
                                    vercel.com/
                                  </p>
                                </div>
                                <Input
                                  className="h-9 rounded-l-none dark:bg-black"
                                  onChange={(event) => event.stopPropagation()}
                                />
                              </div>
                            </div>
                            <div
                              className="flex items-center justify-between rounded-md rounded-t-none
                       border bg-neutral-50 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950"
                            >
                              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                Please use 48 characters at maximum
                              </p>
                              <Button className="h-8">Save</Button>
                            </div>
                          </div>
                        </ContextMenuTrigger>
                        <ContextMenuContent>
                          <DialogTrigger className="w-full">
                            <ContextMenuItem>View Code</ContextMenuItem>
                          </DialogTrigger>
                        </ContextMenuContent>
                      </ContextMenu>
                      <ViewCode
                        installation={`shadcn-ui@latest add input button`}
                        imports={`import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"`}
                        code={`<div className="w-[800px]">
    <div
      className="flex flex-col gap-3 rounded-lg rounded-b-none border border-neutral-200 px-6
      py-6 dark:border-neutral-800 dark:bg-neutral-950"
    >
    <h1 className="text-xl font-semibold">Your Username</h1>
    <p className="text-sm">This is your URL namespace within vercel</p>
    <div className="flex w-72">
      <div
        className="flex items-center rounded-lg rounded-r-none border
        bg-neutral-100 px-2 dark:border-neutral-800 dark:bg-neutral-900"
      >
        <p className="text-sm text-neutral-400 dark:text-neutral-500">
          vercel.com/
        </p>
      </div>
      <Input
        className="h-9 rounded-l-none dark:bg-black"
        onChange={(event) => event.stopPropagation()}
      />
    </div>
  </div>
  <div
    className="flex items-center justify-between rounded-md rounded-t-none
    border bg-neutral-50 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950"
  >
    <p className="text-sm text-neutral-600 dark:text-neutral-400">
      Please use 48 characters at maximum
    </p>
    <Button className="h-8">Save</Button>
  </div>
</div>`}
                      />
                    </Dialog>
                    <Dialog>
                      <ContextMenu>
                        <ContextMenuTrigger>
                          <div>
                            <div
                              className="flex flex-col gap-3 rounded-lg rounded-b-none border border-neutral-200 px-6
                       py-6 dark:border-neutral-800 dark:bg-neutral-950"
                            >
                              <h1 className="text-xl font-semibold">
                                Your Name
                              </h1>
                              <p className="text-sm">
                                Please enter your full name or a display name
                                you are comfortable with.
                              </p>
                              <Input
                                className="h-9 w-72 dark:bg-black"
                                onChange={(event) => event.stopPropagation()}
                              />
                            </div>
                            <div
                              className="flex items-center justify-between rounded-md rounded-t-none
                       border bg-neutral-50 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950"
                            >
                              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                Please use 32 characters at maximum
                              </p>
                              <Button className="h-8">Save</Button>
                            </div>
                          </div>
                        </ContextMenuTrigger>
                        <ContextMenuContent>
                          <DialogTrigger className="w-full">
                            <ContextMenuItem>View Code</ContextMenuItem>
                          </DialogTrigger>
                        </ContextMenuContent>
                      </ContextMenu>
                      <ViewCode
                        installation={`npx shadcn-ui@latest add input button`}
                        imports={`import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"`}
                        code={`<div className="w-[800px]">
  <div 
    className="flex flex-col gap-3 rounded-lg rounded-b-none border border-neutral-200 px-6
    py-6 dark:border-neutral-800 dark:bg-neutral-950"
  >
    <h1 className="text-xl font-semibold"> Your Name </h1>
    <p className="text-sm"> Please enter your full name or a display name you are comfortable with. </p>
    <Input className="h-9 w-72 dark:bg-black" onChange={(event)=> event.stopPropagation()} />
  </div>
  <div 
    className="flex items-center justify-between rounded-md rounded-t-none
    border bg-neutral-50 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950"
  >
    <p className="text-sm text-neutral-600 dark:text-neutral-400"> Please use 32 characters at maximum </p>
    <Button className="h-8">Save</Button>
  </div>
</div>`}
                      />
                    </Dialog>
                    <Dialog>
                      <ContextMenu>
                        <ContextMenuTrigger>
                          <div>
                            <div
                              className="flex flex-col gap-3 rounded-lg rounded-b-none border border-neutral-200
                     px-6 py-6 dark:border-neutral-800 dark:bg-neutral-950"
                            >
                              <h1 className="text-xl font-semibold">
                                Your Email
                              </h1>
                              <p className="text-sm">
                                Please enter the email address you want to use
                                to log in with Vercel.
                              </p>
                              <Input
                                className="h-9 w-72 dark:bg-black"
                                onChange={(event) => event.stopPropagation()}
                              />
                            </div>
                            <div
                              className="flex items-center justify-between rounded-md
                     rounded-t-none border bg-neutral-50 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950"
                            >
                              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                We will email you to verify the change.
                              </p>
                              <Button className="h-8">Save</Button>
                            </div>
                          </div>
                        </ContextMenuTrigger>
                        <ContextMenuContent>
                          <DialogTrigger className="w-full">
                            <ContextMenuItem>View Code</ContextMenuItem>
                          </DialogTrigger>
                        </ContextMenuContent>
                      </ContextMenu>
                      <ViewCode
                        installation={`shadcn-ui@latest add input button`}
                        imports={`import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"`}
                        code={`<div className="w-[800px]">
  <div 
    className="flex flex-col gap-3 rounded-lg rounded-b-none border border-neutral-200
    px-6 py-6 dark:border-neutral-800 dark:bg-neutral-950"
  >
    <h1 className="text-xl font-semibold"> Your Email </h1>
    <p className="text-sm"> Please enter the email address you want to use to log in with Vercel. </p>
    <Input className="h-9 w-72 dark:bg-black" onChange={(event)=> event.stopPropagation()} />
  </div>
  <div 
    className="flex items-center justify-between rounded-md
    rounded-t-none border bg-neutral-50 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950"
  >
    <p className="text-sm text-neutral-600 dark:text-neutral-400"> We will email you to verify the change. </p>
    <Button className="h-8">Save</Button>
  </div>
</div>`}
                      />
                    </Dialog>
                    <Dialog>
                      <ContextMenu>
                        <ContextMenuTrigger>
                          <div>
                            <div
                              className="flex flex-col gap-3 rounded-lg rounded-b-none border-x
                       border-t border-neutral-200 px-6 py-6 dark:border-neutral-800 dark:bg-neutral-950"
                            >
                              <h1 className="text-xl font-semibold">
                                Comments
                              </h1>
                              <p className="text-sm">
                                Enable commnets on your Preview Deployments.
                              </p>
                              <DropdownMenu>
                                <DropdownMenuTrigger className="w-44">
                                  <Button
                                    variant="outline"
                                    className="flex w-44 justify-between"
                                  >
                                    {selectedItem}
                                    <ChevronDownIcon />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-44">
                                  <DropdownMenuItem
                                    onClick={() =>
                                      setSelectedItem("Default (on)")
                                    }
                                  >
                                    Default (on)
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() => setSelectedItem("On")}
                                  >
                                    On
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() => setSelectedItem("Off")}
                                  >
                                    Off
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                            <div
                              className="rounded-lg rounded-b-none rounded-l-none rounded-r-none border-x
                       border-b border-neutral-200 px-6 dark:border-neutral-800 dark:bg-neutral-950"
                            >
                              <div className="flex flex-col gap-3 border-t border-neutral-200 py-6 dark:border-neutral-800">
                                <p className="text-sm">
                                  Allow this setting to be overriden on the
                                  project level
                                </p>
                                <Switch className="data-[state=checked]:bg-blue-600 dark:data-[state=checked]:bg-blue-600" />
                              </div>
                            </div>
                            <div
                              className="flex items-center justify-between rounded-md
                       rounded-t-none border bg-neutral-50 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950"
                            >
                              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                Learn more about{" "}
                                <a
                                  href="https://vercel.com/docs/workflow-collaboration/comments"
                                  target="_blank"
                                  className="text-blue-600"
                                >
                                  Comments{" "}
                                  <ExternalLinkIcon className="inline" />
                                </a>
                              </p>
                              <Button className="h-8">Save</Button>
                            </div>
                          </div>
                        </ContextMenuTrigger>
                        <ContextMenuContent>
                          <DialogTrigger className="w-full">
                            <ContextMenuItem>View Code</ContextMenuItem>
                          </DialogTrigger>
                        </ContextMenuContent>
                      </ContextMenu>
                      <ViewCode
                        installation={`shadcn-ui@latest add dropdown-menu switch button`}
                        imports={`import {
DropdownMenu,
DropdownMenuTrigger,
DropdownMenuContent,
DropdownMenuItem
} from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, ChevronDownIcon } from "@radix-ui/react-icons"
import * as React from "react"`}
                        consts={`const [selectedItem, setSelectedItem] = useState("Default (on)")

`}
                        code={`<div className="w-[800px]">
<div
    className="flex flex-col gap-3 rounded-lg rounded-b-none border-x
    border-t border-neutral-200 px-6 py-6 dark:border-neutral-800 dark:bg-neutral-950"
  >
    <h1 className="text-xl font-semibold">Comments</h1>
    <p className="text-sm">Enable commnets on your Preview Deployments.</p>
    <DropdownMenu>
      <DropdownMenuTrigger className="w-44">
        <Button variant="outline" className="flex w-44 justify-between">
          {selectedItem}
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        <DropdownMenuItem onClick={() => setSelectedItem("Default (on)")}>
          Default (on)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSelectedItem("On")}>
          On
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSelectedItem("Off")}>
          Off
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
  <div
    className="rounded-lg rounded-b-none rounded-l-none rounded-r-none border-x
    border-b border-neutral-200 px-6 dark:border-neutral-800 dark:bg-neutral-950"
  >
    <div className="flex flex-col gap-3 border-t border-neutral-200 py-6 dark:border-neutral-800">
      <p className="text-sm">
        Allow this setting to be overriden on the project level
      </p>
      <Switch className="data-[state=checked]:bg-blue-600 dark:data-[state=checked]:bg-blue-600" />
    </div>
  </div>
  <div
    className="flex items-center justify-between rounded-md
    rounded-t-none border bg-neutral-50 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950"
  >
    <p className="text-sm text-neutral-600 dark:text-neutral-400">
      Learn more about{" "}
      <a href="https://vercel.com/docs/workflow-collaboration/comments" target="_blank" className="text-blue-600">
        Comments <ExternalLinkIcon className="inline" />
      </a>
    </p>
    <Button className="h-8">Save</Button>
  </div>
</div>`}
                      />
                    </Dialog>
                  </TabsContent>
                  <TabsContent
                    value="notifications"
                    className="flex w-full flex-col data-[state=inactive]:hidden"
                  >
                    <h1 className="mb-4 text-2xl font-semibold">
                      My Notifications
                    </h1>
                    <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
                      Manage your personal notification settings
                    </p>
                    <Dialog>
                      <ContextMenu>
                        <ContextMenuTrigger>
                          <div className="rounded-md border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-950">
                            <div className="rounded-md bg-neutral-50 px-6 py-4 dark:bg-neutral-900">
                              <h1 className="text-xl font-semibold">Web</h1>
                            </div>
                            <div className="px-6 py-6">
                              <h1 className="mb-6 font-semibold">Account</h1>
                              <div className="flex items-center gap-4">
                                <Checkbox
                                  id="accountcheck"
                                  className="rounded-sm"
                                  defaultChecked
                                />
                                <label
                                  htmlFor="accountcheck"
                                  className="text-sm text-neutral-600 dark:text-neutral-400"
                                >
                                  Team join requests
                                </label>
                              </div>
                              <h1 className="mb-6 mt-10 font-semibold">
                                Deployments
                              </h1>
                              <div className="flex items-center gap-4">
                                <Checkbox
                                  id="deploymentscheck"
                                  className="rounded-sm"
                                  defaultChecked
                                />
                                <label
                                  htmlFor="deploymentscheck"
                                  className="text-sm text-neutral-600 dark:text-neutral-400"
                                >
                                  Deployments failures
                                </label>
                              </div>
                              <h1 className="mb-6 mt-10 font-semibold">
                                Domains
                              </h1>
                              <div className="flex flex-col  gap-4">
                                <div className="flex items-center gap-4 border-b pb-4 dark:border-neutral-700">
                                  <Checkbox
                                    id="domainscheck1"
                                    className="rounded-sm"
                                    defaultChecked
                                  />
                                  <label
                                    htmlFor="domainscheck1"
                                    className="text-sm text-neutral-600 dark:text-neutral-400"
                                  >
                                    Configuration
                                  </label>
                                </div>
                                <div className="flex items-center gap-4 border-b pb-4 dark:border-neutral-700">
                                  <Checkbox
                                    id="domainscheck2"
                                    className="rounded-sm"
                                    defaultChecked
                                  />
                                  <label
                                    htmlFor="domainscheck2"
                                    className="text-sm text-neutral-600 dark:text-neutral-400"
                                  >
                                    Renewals
                                  </label>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Checkbox
                                    id="domainscheck3"
                                    className="rounded-sm"
                                    defaultChecked
                                  />
                                  <label
                                    htmlFor="domainscheck3"
                                    className="text-sm text-neutral-600 dark:text-neutral-400"
                                  >
                                    Transfers
                                  </label>
                                </div>
                              </div>
                              <h1 className="mb-6 mt-10 font-semibold">
                                Integrations
                              </h1>
                              <div className="flex items-center gap-4">
                                <Checkbox
                                  id="integrationscheck"
                                  className="rounded-sm"
                                  defaultChecked
                                />
                                <label
                                  htmlFor="integrationscheck"
                                  className="text-sm text-neutral-600 dark:text-neutral-400"
                                >
                                  Integration updates
                                </label>
                              </div>
                              <h1 className="mb-6 mt-10 font-semibold">
                                Usage
                              </h1>
                              <div className="flex items-center gap-4">
                                <Checkbox
                                  id="usagecheck"
                                  className="rounded-sm"
                                  defaultChecked
                                />
                                <label
                                  htmlFor="usagecheck"
                                  className="text-sm text-neutral-600 dark:text-neutral-400"
                                >
                                  Warnings
                                </label>
                              </div>
                            </div>
                          </div>
                        </ContextMenuTrigger>
                        <ContextMenuContent>
                          <DialogTrigger className="w-full">
                            <ContextMenuItem>View Code</ContextMenuItem>
                          </DialogTrigger>
                        </ContextMenuContent>
                      </ContextMenu>
                      <ViewCode
                        installation={`shadcn-ui@latest add checkbox`}
                        imports={`import { Checkbox } from "@/components/ui/checkbox"`}
                        code={`<div 
  className="rounded-md border border-neutral-200 dark:border-neutral-700
  dark:bg-neutral-950 w-[800px]">
  <div className="rounded-md bg-neutral-50 px-6 py-4 dark:bg-neutral-900">
    <h1 className="text-xl font-semibold">Web</h1>
  </div>
  <div className="px-6 py-6">
    <h1 className="mb-6 font-semibold">Account</h1>
    <div className="flex items-center gap-4">
      <Checkbox id="accountcheck" className="rounded-sm" defaultChecked />
      <label
        htmlFor="accountcheck"
        className="text-sm text-neutral-600 dark:text-neutral-400"
      >
        Team join requests
      </label>
    </div>
    <h1 className="mb-6 mt-10 font-semibold">Deployments</h1>
    <div className="flex items-center gap-4">
      <Checkbox id="deploymentscheck" className="rounded-sm" defaultChecked />
      <label
        htmlFor="deploymentscheck"
        className="text-sm text-neutral-600 dark:text-neutral-400"
      >
        Deployments failures
      </label>
    </div>
    <h1 className="mb-6 mt-10 font-semibold">Domains</h1>
    <div className="flex flex-col  gap-4">
      <div className="flex items-center gap-4 border-b pb-4 dark:border-neutral-700">
        <Checkbox id="domainscheck1" className="rounded-sm" defaultChecked />
        <label
          htmlFor="domainscheck1"
          className="text-sm text-neutral-600 dark:text-neutral-400"
        >
          Configuration
        </label>
      </div>
      <div className="flex items-center gap-4 border-b pb-4 dark:border-neutral-700">
        <Checkbox id="domainscheck2" className="rounded-sm" defaultChecked />
        <label
          htmlFor="domainscheck2"
          className="text-sm text-neutral-600 dark:text-neutral-400"
        >
          Renewals
        </label>
      </div>
      <div className="flex items-center gap-4">
        <Checkbox id="domainscheck3" className="rounded-sm" defaultChecked />
        <label
          htmlFor="domainscheck3"
          className="text-sm text-neutral-600 dark:text-neutral-400"
        >
          Transfers
        </label>
      </div>
    </div>
    <h1 className="mb-6 mt-10 font-semibold">Integrations</h1>
    <div className="flex items-center gap-4">
      <Checkbox id="integrationscheck" className="rounded-sm" defaultChecked />
      <label
        htmlFor="integrationscheck"
        className="text-sm text-neutral-600 dark:text-neutral-400"
      >
        Integration updates
      </label>
    </div>
    <h1 className="mb-6 mt-10 font-semibold">Usage</h1>
    <div className="flex items-center gap-4">
      <Checkbox id="usagecheck" className="rounded-sm" defaultChecked />
      <label
        htmlFor="usagecheck"
        className="text-sm text-neutral-600 dark:text-neutral-400"
      >
        Warnings
      </label>
    </div>
  </div>
</div>`}
                      />
                    </Dialog>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        <footer
          className="flex flex-col justify-center gap-5 border-t border-gray-200 px-6 pb-16
         pt-8 dark:border-neutral-700 dark:bg-black 2xl:items-center"
        >
          <div className="flex justify-between 2xl:w-3/5">
            <div className="flex items-center gap-4">
              <a href="https://vercel.com/home" target="_blank">
                <svg className="h-5 dark:fill-white" viewBox="0 0 283 64">
                  <path d="M37 0l37 64H0L37 0zM159.6 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7h28.3c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM267.3 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7H267c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM219.3 28.3l6.8-3.9c-3.2-5-8.9-7.8-15.8-7.8-10.9 0-18.5 7.2-18.5 17.5s7.6 17.5 18.5 17.5c6.9 0 12.6-2.8 15.8-7.8l-6.8-3.9c-1.8 3-5 4.7-9 4.7-6.3 0-10.5-4.2-10.5-10.5s4.2-10.5 10.5-10.5c3.9 0 7.2 1.7 9 4.7zM282.3 5.6h-8v45h8v-45zM128.5 5.6h-9.2L101.7 36 84.1 5.6h-9.3L101.7 52l26.8-46.4zM185.1 25.8c.9 0 1.8.1 2.7.3v-8.5c-6.8.2-13.2 4-13.2 8.7v-8.7h-8v33h8V36.3c0-6.2 4.3-10.5 10.5-10.5z"></path>
                </svg>
              </a>
              <p className="text-sm text-neutral-500">
                Copyright © 2023 Vercel Inc. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <Dialog>
                <ContextMenu>
                  <ContextMenuTrigger>
                    <Button
                      variant="outline"
                      className="px-1 font-normal"
                      onClick={() => setOpen((prev) => !prev)}
                    >
                      Command Menu
                      <kbd className="ml-2 mr-1 rounded-lg border border-gray-200 px-1 py-1 dark:border-neutral-800">
                        Ctrl
                      </kbd>
                      <kbd className="rounded-lg border border-gray-200 px-2 py-1 dark:border-neutral-800">
                        K
                      </kbd>
                    </Button>
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <DialogTrigger className="w-full">
                      <ContextMenuItem>View Code</ContextMenuItem>
                    </DialogTrigger>
                  </ContextMenuContent>
                </ContextMenu>
                <ViewCode
                  installation={`shadcn-ui@latest add button`}
                  imports={`import {
CommandDialog,
CommandInput,
CommandList,
CommandGroup,
CommandItem,
CommandEmpty,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import * as React from "react"`}
                  consts={`const [open, setOpen] = React.useState(false)

React.useEffect(() => {
  const down = (e) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpen((open) => !open)
    }
  }

  document.addEventListener("keydown", down)
  return () => document.removeEventListener("keydown", down)
}, [])

`}
                  code={`<Button
  variant="outline"
  className="px-1 font-normal"
  onClick={() => setOpen((prev) => !prev)}
>
  Command Menu
  <kbd className="ml-2 mr-1 rounded-lg border border-gray-200 px-1 py-1 dark:border-neutral-800">
    Ctrl
  </kbd>
  <kbd className="rounded-lg border border-gray-200 px-2 py-1 dark:border-neutral-800">
    K
  </kbd>
</Button>
<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>`}
                />
              </Dialog>
              <Dialog>
                <ContextMenu>
                  <ContextMenuTrigger>
                    <Button variant="outline" className="font-normal">
                      Status:
                      <Circle className="ml-2 mr-2 h-2.5 w-2.5 fill-blue-500 text-blue-600" />
                      <p className="font-semibold text-blue-600">
                        All systems normal.
                      </p>
                    </Button>
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <DialogTrigger className="w-full">
                      <ContextMenuItem>View Code</ContextMenuItem>
                    </DialogTrigger>
                  </ContextMenuContent>
                </ContextMenu>
                <ViewCode
                  installation={`shadcn-ui@latest add button`}
                  installation2={`install lucide-react`}
                  imports={`import { Button } from "@/components/ui/button"
import { Circle } from "lucide-react"`}
                  code={`<Button variant="outline" className="font-normal">
  Status:
  <Circle className="ml-2 mr-2 h-2.5 w-2.5 fill-blue-500 text-blue-600" />
  <p className="font-semibold text-blue-600">All systems normal.</p>
</Button>`}
                />
              </Dialog>
            </div>
          </div>
          <div className="flex gap-14">
            <a href="https://vercel.com/home" alt="vercel home" target="_blank">
              <p className="text-sm text-neutral-500">Home</p>
            </a>
            <a href="https://vercel.com/docs" alt="vercel docs" target="_blank">
              <p className="text-sm text-neutral-500">Documentation</p>
            </a>
            <a
              href="https://vercel.com/guides"
              alt="vercel guides"
              target="_blank"
            >
              <p className="text-sm text-neutral-500">Guides</p>
            </a>
            <a href="https://vercel.com/help" alt="vercel help" target="_blank">
              <p className="text-sm text-neutral-500">Help</p>
            </a>
            <a
              href="https://vercel.com/contact/sales"
              alt="vercel contact sales"
              target="_blank"
            >
              <p className="text-sm text-neutral-500">Contact Sales</p>
            </a>
            <a href="https://vercel.com/blog" alt="vercel blog" target="_blank">
              <p className="text-sm text-neutral-500">Blog</p>
            </a>
            <a
              href="https://vercel.com/changelog"
              alt="vercel changelog"
              target="_blank"
            >
              <p className="text-sm text-neutral-500">Changelog</p>
            </a>
            <a
              href="https://vercel.com/pricing"
              alt="vercel pricing"
              target="_blank"
            >
              <p className="text-sm text-neutral-500">Pricing</p>
            </a>
            <a
              href="https://vercel.com/enterprise"
              alt="vercel enterprise"
              target="_blank"
            >
              <p className="text-sm text-neutral-500">Enterprise</p>
            </a>
            <Dialog>
              <ContextMenu>
                <ContextMenuTrigger>
                  <Dialog
                    open={isCookiesDialogOpen}
                    onOpenChange={(isOpen) => {
                      setIsCookiesDialogOpen(isOpen)
                      setIsNecessaryOpen(false)
                      setIsOptionalOpen(true)
                    }}
                  >
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex gap-1 text-sm text-neutral-500">
                        Legal
                        <ChevronDownIcon />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="mb-2 mr-40 rounded-xl">
                        <a
                          href="https://vercel.com/legal/privacy-policy"
                          target="_blank"
                        >
                          <DropdownMenuItem>Privacy Policy</DropdownMenuItem>
                        </a>
                        <a
                          href="https://vercel.com/legal/terms"
                          target="_blank"
                        >
                          <DropdownMenuItem>Terms of Service</DropdownMenuItem>
                        </a>
                        <a
                          href="https://vercel.com/legal/trademark-policy"
                          target="_blank"
                        >
                          <DropdownMenuItem>Trademark Policy</DropdownMenuItem>
                        </a>
                        <a
                          href="https://vercel.com/legal/inactivity-policy"
                          target="_blank"
                        >
                          <DropdownMenuItem>Inactivity Policy</DropdownMenuItem>
                        </a>
                        <a
                          href="https://vercel.com/legal/dmca-policy"
                          target="_blank"
                        >
                          <DropdownMenuItem>DMCA Policy</DropdownMenuItem>
                        </a>
                        <a
                          href="https://vercel.com/legal/support-terms"
                          target="_blank"
                        >
                          <DropdownMenuItem>Support Terms</DropdownMenuItem>
                        </a>
                        <a href="https://vercel.com/legal/dpa" target="_blank">
                          <DropdownMenuItem>DPA</DropdownMenuItem>
                        </a>
                        <a href="https://vercel.com/legal/sla" target="_blank">
                          <DropdownMenuItem>SLA</DropdownMenuItem>
                        </a>
                        <a
                          href="https://security.vercel.com/?itemName=legal&itemUid=e3fae2ca-94a9-416b-b577-5c90e382df57"
                          target="_blank"
                        >
                          <DropdownMenuItem>Sub-processors</DropdownMenuItem>
                        </a>
                        <DialogTrigger className="w-full">
                          <DropdownMenuItem>
                            Cookie Preferences
                          </DropdownMenuItem>
                        </DialogTrigger>
                        <a
                          href="https://vercel.com/legal/event-terms-conditions"
                          target="_blank"
                        >
                          <DropdownMenuItem>
                            Event Terms and Conditions
                          </DropdownMenuItem>
                        </a>
                        <a
                          href="https://vercel.com/legal/event-code-of-conduct"
                          target="_blank"
                        >
                          <DropdownMenuItem>
                            Event Code of Conduct
                          </DropdownMenuItem>
                        </a>
                        <a
                          href="https://vercel.com/legal/job-applicant-privacy-notice"
                          target="_blank"
                        >
                          <DropdownMenuItem>
                            Job Applicant Privacy Notice
                          </DropdownMenuItem>
                        </a>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <DialogContent className="px-0 pb-0 pt-12">
                      <DialogHeader className="px-8">
                        <DialogTitle className="mb-4 h-16 border-b text-2xl dark:border-neutral-700">
                          Cookie Preferences
                        </DialogTitle>
                        <DialogDescription className="text-neutral-800">
                          We use cookies to improve your site experience. The
                          "strictly necessary" cookies are required for Vercel
                          to function.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex flex-col px-8">
                        <Collapsible>
                          <CollapsibleTrigger
                            className="w-full"
                            onClick={() => setIsNecessaryOpen((prev) => !prev)}
                          >
                            <div className="flex items-center gap-4 rounded-md rounded-b-none border border-gray-100 px-4 py-4 dark:border-neutral-800">
                              <Check className="h-5 w-5 text-green-600" />
                              <h1 className="font-medium">
                                Strictly Necessary Cookies
                              </h1>
                              {isNecessaryOpen ? (
                                <ChevronUpIcon className="ml-auto h-6 w-6" />
                              ) : (
                                <ChevronDownIcon className="ml-auto h-6 w-6" />
                              )}
                            </div>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="border-x border-b bg-gray-50 px-4 py-4 dark:border-neutral-800 dark:bg-neutral-900">
                            <h1 className="mb-3 text-sm font-bold">
                              Strictly Necessary Cookies
                            </h1>
                            <p className="text-sm">
                              These are the cookies required for Vercel to
                              function
                            </p>
                          </CollapsibleContent>
                        </Collapsible>
                        <Collapsible
                          open={isOptionalOpen}
                          onOpenChange={setIsOptionalOpen}
                        >
                          <CollapsibleTrigger
                            className="w-full"
                            onClick={() => setIsOptionalOpen((prev) => !prev)}
                          >
                            <div className="flex items-center gap-4 rounded-md rounded-t-none border border-gray-100 px-4 py-4 dark:border-neutral-800">
                              {isSwitchChecked ? (
                                <Check className="h-5 w-5 text-green-600" />
                              ) : (
                                <Cross2Icon className="h-5 w-5 text-red-600" />
                              )}
                              <h1 className="font-medium">
                                Strictly Necessary Cookies
                              </h1>
                              {isOptionalOpen ? (
                                <ChevronUpIcon className="ml-auto h-6 w-6" />
                              ) : (
                                <ChevronDownIcon className="ml-auto h-6 w-6" />
                              )}
                            </div>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="flex items-center gap-4 border-x border-b bg-gray-50 px-4 data-[state=open]:py-4 dark:border-neutral-800 dark:bg-neutral-900">
                            <Switch
                              className="data-[state=checked]:bg-blue-500 data-[state=checked]:dark:bg-blue-500"
                              checked={isSwitchChecked}
                              onCheckedChange={() =>
                                setIsSwitchChecked(!isSwitchChecked)
                              }
                            />
                            <div className="mr-3.5">
                              <h1 className="mb-3 text-sm font-bold">
                                Product Analytics / Tracking Cookies
                              </h1>
                              <p className="text-sm">
                                We include analytics cookies to understand how
                                you use our product and design better
                                experiences.
                              </p>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                      <div className="flex h-20 items-center justify-end bg-gray-50 px-6 dark:bg-neutral-900">
                        <Button
                          className="h-8 bg-blue-600"
                          onClick={() =>
                            setIsCookiesDialogOpen((prev) => !prev)
                          }
                        >
                          Save current settings
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <DialogTrigger className="w-full">
                    <ContextMenuItem>View Code</ContextMenuItem>
                  </DialogTrigger>
                </ContextMenuContent>
              </ContextMenu>
              <ViewCode
                installation={`shadcn-ui@latest add dialog dropdown-menu collapsible switch button`}
                installation2={`install lucide-react @radix-ui/react-icons`}
                imports={`import {
Dialog,
DialogTrigger,
DialogContent,
DialogHeader,
DialogTitle,
DialogDescription,
} from "@/components/ui/dialog"
import { 
DropdownMenu,
DropdownMenuTrigger,
DropdownMenuContent,
DropdownMenuItem
} from "@/components/ui/dropdown-menu"
import { 
Collapsible,
CollapsibleTrigger,
CollapsibleContent
} from "@/components/ui/collapsible"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { 
Cross2Icon,
ChevronDownIcon,
ChevronUpIcon
} from "@radix-ui/react-icons"
import { Check } from "lucide-react"
import * as React from "react"`}
                consts={`const [isCookiesDialogOpen, setIsCookiesDialogOpen] = React.useState(false)
const [isNecessaryOpen, setIsNecessaryOpen] = React.useState(false)
const [isOptionalOpen, setIsOptionalOpen] = React.useState(false)
const [isSwitchChecked, setIsSwitchChecked] = React.useState(false)

`}
                code={`<Dialog
  open={isCookiesDialogOpen}
  onOpenChange={(isOpen) => {
    setIsCookiesDialogOpen(isOpen);
    setIsNecessaryOpen(false);
    setIsOptionalOpen(true);
  }}
>
  <DropdownMenu>
    <DropdownMenuTrigger className="flex gap-1 text-sm text-neutral-500">
      Legal
      <ChevronDownIcon />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="mb-2 mr-40 rounded-xl">
      <a href="https://vercel.com/legal/privacy-policy" target="_blank">
        <DropdownMenuItem>Privacy Policy</DropdownMenuItem>
      </a>
      <a href="https://vercel.com/legal/terms" target="_blank">
        <DropdownMenuItem>Terms of Service</DropdownMenuItem>
      </a>
      <a href="https://vercel.com/legal/trademark-policy" target="_blank">
        <DropdownMenuItem>Trademark Policy</DropdownMenuItem>
      </a>
      <a href="https://vercel.com/legal/inactivity-policy" target="_blank">
        <DropdownMenuItem>Inactivity Policy</DropdownMenuItem>
      </a>
      <a href="https://vercel.com/legal/dmca-policy" target="_blank">
        <DropdownMenuItem>DMCA Policy</DropdownMenuItem>
      </a>
      <a href="https://vercel.com/legal/support-terms" target="_blank">
        <DropdownMenuItem>Support Terms</DropdownMenuItem>
      </a>
      <a href="https://vercel.com/legal/dpa" target="_blank">
        <DropdownMenuItem>DPA</DropdownMenuItem>
      </a>
      <a href="https://vercel.com/legal/sla" target="_blank">
        <DropdownMenuItem>SLA</DropdownMenuItem>
      </a>
      <a
        href="https://security.vercel.com/?itemName=legal&itemUid=e3fae2ca-94a9-416b-b577-5c90e382df57"
        target="_blank"
      >
        <DropdownMenuItem>Sub-processors</DropdownMenuItem>
      </a>
      <DialogTrigger className="w-full">
        <DropdownMenuItem>Cookie Preferences</DropdownMenuItem>
      </DialogTrigger>
      <a href="https://vercel.com/legal/event-terms-conditions" target="_blank">
        <DropdownMenuItem>Event Terms and Conditions</DropdownMenuItem>
      </a>
      <a href="https://vercel.com/legal/event-code-of-conduct" target="_blank">
        <DropdownMenuItem>Event Code of Conduct</DropdownMenuItem>
      </a>
      <a
        href="https://vercel.com/legal/job-applicant-privacy-notice"
        target="_blank"
      >
        <DropdownMenuItem>Job Applicant Privacy Notice</DropdownMenuItem>
      </a>
    </DropdownMenuContent>
  </DropdownMenu>
  <DialogContent className="px-0 pb-0 pt-12">
    <DialogHeader className="px-8">
      <DialogTitle className="mb-4 h-16 border-b text-2xl dark:border-neutral-700">
        Cookie Preferences
      </DialogTitle>
      <DialogDescription className="text-neutral-800">
        We use cookies to improve your site experience. The "strictly necessary"
        cookies are required for Vercel to function.
      </DialogDescription>
    </DialogHeader>
    <div className="flex flex-col px-8">
      <Collapsible>
        <CollapsibleTrigger
          className="w-full"
          onClick={() => setIsNecessaryOpen((prev) => !prev)}
        >
          <div className="flex items-center gap-4 rounded-md rounded-b-none border border-gray-100 px-4 py-4 dark:border-neutral-800">
            <Check className="h-5 w-5 text-green-600" />
            <h1 className="font-medium">Strictly Necessary Cookies</h1>
            {isNecessaryOpen ? (
              <ChevronUpIcon className="ml-auto h-6 w-6" />
            ) : (
              <ChevronDownIcon className="ml-auto h-6 w-6" />
            )}
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="border-x border-b bg-gray-50 px-4 py-4 dark:border-neutral-800 dark:bg-neutral-900">
          <h1 className="mb-3 text-sm font-bold">Strictly Necessary Cookies</h1>
          <p className="text-sm">
            These are the cookies required for Vercel to function
          </p>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible open={isOptionalOpen} onOpenChange={setIsOptionalOpen}>
        <CollapsibleTrigger
          className="w-full"
          onClick={() => setIsOptionalOpen((prev) => !prev)}
        >
          <div className="flex items-center gap-4 rounded-md rounded-t-none border border-gray-100 px-4 py-4 dark:border-neutral-800">
            {isSwitchChecked ? (
              <Check className="h-5 w-5 text-green-600" />
            ) : (
              <Cross2Icon className="h-5 w-5 text-red-600" />
            )}
            <h1 className="font-medium">Strictly Necessary Cookies</h1>
            {isOptionalOpen ? (
              <ChevronUpIcon className="ml-auto h-6 w-6" />
            ) : (
              <ChevronDownIcon className="ml-auto h-6 w-6" />
            )}
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="flex items-center gap-4 border-x border-b bg-gray-50 px-4 data-[state=open]:py-4 dark:border-neutral-800 dark:bg-neutral-900">
          <Switch
            className="data-[state=checked]:bg-blue-500 data-[state=checked]:dark:bg-blue-500"
            checked={isSwitchChecked}
            onCheckedChange={() => setIsSwitchChecked(!isSwitchChecked)}
          />
          <div className="mr-3.5">
            <h1 className="mb-3 text-sm font-bold">
              Product Analytics / Tracking Cookies
            </h1>
            <p className="text-sm">
              We include analytics cookies to understand how you use our product
              and design better experiences.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
    <div className="flex h-20 items-center justify-end bg-gray-50 px-6 dark:bg-neutral-900">
      <Button
        className="h-8 bg-blue-600"
        onClick={() => setIsCookiesDialogOpen((prev) => !prev)}
      >
        Save current settings
      </Button>
    </div>
  </DialogContent>
</Dialog>`}
              />
            </Dialog>
            <div className="flex items-center gap-4">
              <a href="" target="_blank">
                <GitHubLogoIcon className="h-5 w-5 text-neutral-600" />
              </a>
              <p className="text-neutral-200 dark:text-neutral-800">|</p>
              <a href="https://twitter.com/sultandotdev" target="_blank">
                <TwitterLogoIcon className="h-5 w-5 text-neutral-600" />
              </a>
            </div>
          </div>
        </footer>
      </main>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
