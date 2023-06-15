import { saveAs } from "file-saver";
import { compileBlob } from "./compile";
import { parseCodeAndGetParseElements } from "@/parser/parser";
import {vm} from "@/main";
import { useStore } from "@/store/store";
import { MessageDefinitions } from "@/types/types";
import { getAppSimpleMsgDlgId } from "./editor";
import i18n from "@/i18n";

export function downloadHex(showImagePopup?: boolean): void {
    const parserElements = parseCodeAndGetParseElements(true);
    let succeeded = !parserElements.hasErrors;
    if(succeeded){
        const blob = compileBlob(parserElements.compiler);
        if (blob) {
            saveAs(blob, "main.hex");
        }
        else{
            succeeded = false;
        }
    }

    //We show the image only if the download has succeeded, and we request one to be shown
    if(!succeeded){
        // Notify the user of any detected errors in the code
        useStore().simpleModalDlgMsg = i18n.t("appMessage.preCompiledErrorNeedFix") as string;
        vm.$emit("bv::show::modal", getAppSimpleMsgDlgId());
    }
    else if (showImagePopup){
        useStore().currentMessage = MessageDefinitions.DownloadHex;
    }
}

export function downloadPython() : void {
    const parserElements = parseCodeAndGetParseElements(false);
    if (parserElements.hasErrors) {
        // Notify the user of any detected errors in the code
        useStore().simpleModalDlgMsg = i18n.t("appMessage.preCompiledErrorNeedFix") as string;
        vm.$emit("bv::show::modal", getAppSimpleMsgDlgId());
        return;
    }

    const blob = new Blob(
        [parserElements.parsedOutput],
        { type: "application/octet-stream" }
    );
    saveAs(
        blob,
        "main.py"
    );
}
