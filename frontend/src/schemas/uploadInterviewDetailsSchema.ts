
import { z } from "zod";

export const uploadInterviewDetailsSchema = z.object({
  companyName: z
    .string()
    .trim()
    .min(1, "Company name is required"),

  jobRole: z
    .string()
    .trim()
    .min(1, "Job role is required"),

  interviewRound: z
    .string()
    .trim(),

  interviewDate: z
    .string()
    .min(1, "Interview date is required")
    .refine(
      (value) => !Number.isNaN(Date.parse(value)),
      "Please enter a valid interview date"
    ),

  interviewMode: z
    .enum(["virtual", "inPerson"])
    .or(z.literal("")),

  interviewAdditionalNotes: z
    .string()
    .trim(),

  interviewRecording: z
    .custom<FileList>(
      (value) =>
        typeof FileList !== "undefined" &&
        value instanceof FileList &&
        value.length > 0,
      "Interview recording is required"
    )
    .refine(
      (files) =>
        files.length > 0 &&
        /^(audio|video)\//.test(files[0].type),
      "Please upload an audio or video file"
    ),
});

export type UploadInterviewDetailsFormData = z.infer<
  typeof uploadInterviewDetailsSchema
>;
