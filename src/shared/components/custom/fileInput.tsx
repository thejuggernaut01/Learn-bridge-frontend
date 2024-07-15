"use client";
import { Input } from "@/shared/components/ui/input";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface IFileInput extends HTMLAttributes<HTMLDivElement> {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  uploadProgress?: number;
  classNames?: {
    input?: string;
    base?: string;
    descriptionsWrapper?: string;
    inputWrapper?: string;
  };
}

const FileInput = ({
  className,
  uploadProgress,
  inputProps,
  classNames,
  ...props
}: IFileInput) => {
  const uploadFile = (e: any) => {
    const target = e.target as HTMLInputElement;
    const f = target?.files?.[0];
    if (f?.type == "image/jpeg" || f?.type == "image/png") {
      //   setUserDetails({
      //     ...userDetails,
      //     image: URL.createObjectURL(f),
      //   });
      //   setFile(f);
      //   doUpdateProfilePicture(f);
    } else {
      //   toast.error(`This format is not allowed for upload`);
    }
  };

  return (
    <div
      className={cn(
        "relative w-full min-h-[7.875rem] rounded-[.5rem] overflow-hidden border hover:border-ring py-4 px-[1.5rem]",
        className,
        classNames?.base
      )}
      {...props}
    >
      <div
        className={cn(
          "w-full h-full relative flex flex-col justify-center items-center",
          classNames?.descriptionsWrapper
        )}
      >
        <div className="flex flex-col justify-center items-center gap-[0.25rem]">
          <p className="text-muted-foreground text-[0.875rem] leading-[1.25rem]">
            <span className="font-[600]">Click to upload</span> or drag and drop
          </p>
          <p className="text-muted-foreground text-[0.875rem] leading-[1.125rem]">
            PNG, JPG or PDF (max. 5 MB)
          </p>
        </div>
      </div>

      <div
        className={cn(
          "absolute w-full h-full top-0 left-0 bg-transparent cursor-pointer z-[1]",
          classNames?.inputWrapper
        )}
      >
        <Input
          accept="image/png,image/jpeg"
          type="file"
          className={cn(
            "absolute opacity-0 cursor-pointer w-[430px] h-[138px]",
            classNames?.input,
            inputProps?.className
          )}
          onChange={uploadFile}
          {...inputProps}
        />
      </div>
    </div>
  );
};

export default FileInput;
