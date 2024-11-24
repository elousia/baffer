import React from "react";

import StackSheet from "./stack-sheet";
import { RotateCcw } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Stack() {
  return (
    <div>
      <div className="mt- relative flex w-[22rem] rounded-3xl shadow-lg shadow-zinc-300/50">
        {" "}
        <div className="min-h-40 w-full rounded-3xl border border-zinc-200 bg-white p-5 transition-all">
          <div className="flex flex-col">
            <p className="ml- text- truncate font-semibold text-zinc-800">
              {" "}
              Meeting with Mr Jackson Attah Duah who was my teacher
            </p>
            <p className="my-2 text-xs font-semibold text-zinc-400">
              18-10-2021
            </p>
          </div>
          {/* <div className="my-4">
            <audio controls className="w-full opacity-70">
              <a
                href="https://share.transistor.fm/s/0b397ae3"
                className="font-geist-mono text-white"
              >
                <table cellPadding={0} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          width="47"
                          height="47"
                          src="https://marketing.transistor.fm/assets/email-embed-player/play.png"
                        />
                      </td>
                      <td width="10px"></td>
                      <td>
                        <div>
                          <img
                            width="100%"
                            src="https://marketing.transistor.fm/assets/email-embed-player/progress-bar.png"
                          />
                        </div>
                        <table width="100%" cellSpacing={0} cellPadding={0}>
                          <tbody>
                            <tr className="h-2"></tr>
                            <tr>
                              <td width="100">
                                <img
                                  height="19"
                                  width="100"
                                  src="https://marketing.transistor.fm/assets/email-embed-player/controls.png"
                                />
                              </td>
                              <td align="right">
                                <small className="text-white opacity-70">
                                  00:00
                                </small>
                                <small className="text-white opacity-20">
                                  |
                                </small>
                                <small className="text-white opacity-70">
                                  01:12:00
                                </small>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </a>
              <source src="https://media.transistor.fm/0b397ae3/d045a402.mp3?src=player"></source>
            </audio>
          </div> */}
          <div className="text-sm text-zinc-700">
            <p className="pb-1 font-semibold text-zinc-700">Question</p>
            <p className="text-zinc-600">
              Tailwind doesn't include pre-designed card components out of the
              box, but they're easy to build using existing utilities?
            </p>
          </div>

          <div className="mt-4 text-sm text-zinc-700">
            <p className="pb-1 font-semibold text-zinc-700">
              AI Generated Answer
            </p>
            <p className="line-clamp-4 text-zinc-600">
              The transcriptions API takes as input the audio file you want to
              transcribe and the desired output file format for the
              transcription of the audio. We currently support multiple input
              and output file formats. The Audio API also allows you to set
              additional parameters in a request. For example, if you want to
              set the response_format as text, your request would look like the
              following: The translations API takes as input the audio file in
              any of the supported languages and transcribes, if necessary, the
              audio into English. This differs from our /Transcriptions endpoint
              since the output is not in the original input language and is
              instead translated to English text.
            </p>
            {/* <span className="text-blue-400">read more</span> */}
            <StackSheet />
          </div>
          <div className="mt-4 text-sm text-zinc-700">
            <p className="pb-2 font-semibold text-zinc-700">Add a comment</p>
            {/* <li className="mb-2 line-clamp-6 text-zinc-600">
              The transcriptions API takes as input the audio file you want to
              transcribe and the desired output file.
            </li> */}
            <Textarea
              className="mb-4 h-36 max-h-36 min-h-36 w-full rounded-xl border border-zinc-200 bg-zinc-100 focus-visible:ring-blue-600 disabled:opacity-100"
              rows={5}
              cols={10}
            />
            <Button variant={"secondary"} className="w-full rounded-full">
              View all comments
            </Button>
          </div>
        </div>
      </div>

      {/* <div className="flex w-full items-center justify-center">
        <Button variant={"ghost"} className="rounded-full hover:bg-zinc-200">
          <RotateCcw size={16} className="" />
          Refresh
        </Button>
      </div> */}
    </div>
  );
}
