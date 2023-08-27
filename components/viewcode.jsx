"use client"

import * as React from "react"
import { DialogContent } from "./ui/dialog"
import { Copy } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "./ui/dropdown-menu"
import { ChevronDownIcon } from "@radix-ui/react-icons"

export default function ViewCode({
  installation,
  installation2,
  details,
  imports,
  consts,
  code,
}) {
  const [selectValue, setSelectValue] = React.useState("npx")
  const [installationCopyText, setInstallationCopyText] = React.useState("Copy")
  const [installationCopyText2, setInstallationCopyText2] =
    React.useState("Copy")
  const [importsCopyText, setImportsCopyText] = React.useState("Copy")
  const [constsCopyText, setConstsCopyText] = React.useState("Copy")
  const [codeCopyText, setCodeCopyText] = React.useState("Copy")
  const copyInstallation = selectValue + " " + installation

  const handleCopy = (content, setCopyText) => {
    navigator.clipboard.writeText(content)
    setCopyText("Copied!")

    setTimeout(() => {
      setCopyText("Copy")
    }, 1500)
  }

  return (
    <DialogContent className="mt-2 max-w-[800px] py-4 data-[state=open]:w-[800px]">
      <div className="border-b border-neutral-300 pb-2 dark:border-neutral-800">
        <h1 className="text-2xl">Installation</h1>
      </div>
      {details && <div dangerouslySetInnerHTML={{ __html: details }} />}
      <div
        className="mt-1 flex flex-col gap-1 rounded-md border
       bg-black px-4 py-4 text-sm dark:border-neutral-800 dark:bg-neutral-900"
      >
        <div className="flex justify-between">
          <code className="flex gap-2">
            <p className="text-white">{selectValue}</p>
            <p className="whitespace-pre-wrap  text-neutral-300">
              {installation}
            </p>
          </code>
          <div className="flex items-center gap-3">
            <button
              className="relative h-3.5 w-3.5 cursor-pointer text-white"
              onClick={() =>
                handleCopy(copyInstallation, setInstallationCopyText)
              }
            >
              {installationCopyText === "Copy" ? (
                <Copy className="h-3.5 w-3.5" />
              ) : (
                <p className="absolute right-0 top-0 text-xs">Copied!</p>
              )}
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <ChevronDownIcon className="text-white" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelectValue("npx")}>
                  npx
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectValue("npx")}>
                  yarn
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectValue("pnpm dlx")}>
                  pnpm
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {installation2 && (
          <div className="flex justify-between">
            <code className="flex gap-2">
              <p className="text-white">npm</p>
              <p className="whitespace-pre-wrap  text-neutral-300">
                {installation2}
              </p>
            </code>
            <div className="flex items-center gap-3">
              <button
                className="relative h-3.5 w-3.5 cursor-pointer text-white"
                onClick={() =>
                  handleCopy("npm " + installation2, setInstallationCopyText2)
                }
              >
                {installationCopyText2 === "Copy" ? (
                  <Copy className="h-3.5 w-3.5" />
                ) : (
                  <p className="absolute right-0 top-0 text-xs">Copied!</p>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="border-b border-neutral-300 pb-2 dark:border-neutral-800">
        <h1 className="mt-4 text-2xl">Usage</h1>
      </div>
      <div
        className="relative mt-2 max-h-40 overflow-auto rounded-md border
       bg-black px-4 py-4 text-sm dark:border-neutral-800 dark:bg-neutral-900"
      >
        <code className="whitespace-pre-wrap  text-neutral-300">{imports}</code>
        <button
          className="absolute right-0 top-0 mr-3 mt-2 h-3.5 w-3.5 text-white"
          onClick={() => handleCopy(imports, setImportsCopyText)}
        >
          {importsCopyText === "Copy" ? (
            <Copy className="h-3.5 w-3.5" />
          ) : (
            <p className="absolute right-0 top-0 text-xs">Copied!</p>
          )}
        </button>
      </div>
      <div
        className="relative max-h-40 overflow-auto rounded-md border
       bg-black px-4 py-4 text-sm dark:border-neutral-800 dark:bg-neutral-900"
      >
        {consts && (
          <code className="relative whitespace-pre-wrap text-neutral-300">
            {consts}
            <button
              className="absolute left-[680px] top-0 text-white"
              onClick={() => handleCopy(consts, setConstsCopyText)}
            >
              {constsCopyText === "Copy" ? (
                <Copy className="h-3.5 w-3.5" />
              ) : (
                <p className="absolute -right-4 top-0 font-sans text-xs">
                  Copied!
                </p>
              )}
            </button>
          </code>
        )}
        <code className="relative overflow-auto whitespace-pre text-neutral-300">
          {code}
          <button
            className="absolute left-[681px] top-0 text-white"
            onClick={() => handleCopy(code, setCodeCopyText)}
          >
            {codeCopyText === "Copy" ? (
              <Copy className="h-3.5 w-3.5" />
            ) : (
              <p className="absolute -right-4 top-0 font-sans text-xs">
                Copied!
              </p>
            )}
          </button>
        </code>
      </div>
    </DialogContent>
  )
}
