
import type React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  NotepadText,
  Upload,
  CalendarDays,
  Building2,
  BriefcaseBusiness,
  Video,
  FileAudio,
  FileVideo,
  FileCheck2,
} from "lucide-react";

import type { UploadInterviewDetailsFormData } from "../../schemas/uploadInterviewDetailsSchema";
import { uploadInterviewDetailsSchema } from "../../schemas/uploadInterviewDetailsSchema";
import ErrorMessage from "../ui/common/ErrorMessage";

const UploadInterviewDetailsModal: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UploadInterviewDetailsFormData>({
    resolver: zodResolver(uploadInterviewDetailsSchema),
    defaultValues: {
      companyName: "",
      jobRole: "",
      interviewRound: "",
      interviewDate: "",
      interviewMode: "",
      interviewAdditionalNotes: "",
    },
  });

  const handleInterviewDetailsForm = (
    data: UploadInterviewDetailsFormData
  ) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
      <form onSubmit={handleSubmit(handleInterviewDetailsForm)}>
        {/* Header */}
        <div className="border-b border-gray-100 px-5 py-5 sm:px-8">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <NotepadText size={23} />
            </div>

            <div>
              <h2 className="text-xl font-semibold tracking-tight text-gray-900">
                Upload Interview
              </h2>
              <p className="mt-1 text-sm leading-5 text-gray-500">
                Add an interview recording to your Intervyn library.
              </p>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="max-h-[70vh] space-y-7 overflow-y-auto px-5 py-6 sm:px-8">
          {/* Interview Details */}
          <section>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Interview Details
            </h3>

            <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
              {/* Company */}
              <div className="min-w-0">
                <label
                  htmlFor="companyName"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Company <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <Building2
                    size={18}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    id="companyName"
                    type="text"
                    placeholder="Enter company name"
                    aria-invalid={!!errors.companyName}
                    {...register("companyName")}
                    className={`w-full rounded-xl border bg-white py-3 pl-10 pr-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 ${
                      errors.companyName
                        ? "border-red-400"
                        : "border-gray-200"
                    }`}
                  />
                </div>

                {errors.companyName && (
                  <ErrorMessage
                    errorMessage={errors.companyName.message}
                  />
                )}
              </div>

              {/* Job Role */}
              <div className="min-w-0">
                <label
                  htmlFor="jobRole"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Job Role <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <BriefcaseBusiness
                    size={18}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    id="jobRole"
                    type="text"
                    placeholder="e.g. Frontend Developer"
                    aria-invalid={!!errors.jobRole}
                    {...register("jobRole")}
                    className={`w-full rounded-xl border bg-white py-3 pl-10 pr-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 ${
                      errors.jobRole
                        ? "border-red-400"
                        : "border-gray-200"
                    }`}
                  />
                </div>

                {errors.jobRole && (
                  <ErrorMessage errorMessage={errors.jobRole.message} />
                )}
              </div>

              {/* Interview Round */}
              <div className="min-w-0">
                <label
                  htmlFor="interviewRound"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Interview Round
                  <span className="ml-1 text-xs font-normal text-gray-400">
                    (Optional)
                  </span>
                </label>

                <input
                  id="interviewRound"
                  type="text"
                  placeholder="e.g. Technical Round 1"
                  {...register("interviewRound")}
                  className="w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />

                {errors.interviewRound && (
                  <ErrorMessage
                    errorMessage={errors.interviewRound.message}
                  />
                )}
              </div>

              {/* Interview Date */}
              <div className="min-w-0">
                <label
                  htmlFor="interviewDate"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Interview Date <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <CalendarDays
                    size={18}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    id="interviewDate"
                    type="date"
                    aria-invalid={!!errors.interviewDate}
                    {...register("interviewDate")}
                    className={`w-full rounded-xl border bg-white py-3 pl-10 pr-3 text-sm text-gray-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 ${
                      errors.interviewDate
                        ? "border-red-400"
                        : "border-gray-200"
                    }`}
                  />
                </div>

                {errors.interviewDate && (
                  <ErrorMessage
                    errorMessage={errors.interviewDate.message}
                  />
                )}
              </div>

              {/* Interview Mode */}
              <div className="min-w-0 sm:col-span-2">
                <label
                  htmlFor="interviewMode"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Interview Mode
                  <span className="ml-1 text-xs font-normal text-gray-400">
                    (Optional)
                  </span>
                </label>

                <select
                  id="interviewMode"
                  {...register("interviewMode")}
                  className="w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm text-gray-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                >
                  <option value="">Select interview mode</option>
                  <option value="virtual">Virtual</option>
                  <option value="inPerson">In-person</option>
                </select>

                {errors.interviewMode && (
                  <ErrorMessage
                    errorMessage={errors.interviewMode.message}
                  />
                )}
              </div>
            </div>
          </section>

          {/* Interview Recording */}
          <section>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Interview Recording
            </h3>

            <label
              htmlFor="interviewRecording"
              className={`group flex cursor-pointer flex-col items-center rounded-2xl border-2 border-dashed px-4 py-7 text-center transition sm:px-6 ${
                errors.interviewRecording
                  ? "border-red-300 bg-red-50/50"
                  : "border-indigo-200 bg-indigo-50/40 hover:border-indigo-400 hover:bg-indigo-50"
              }`}
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm ring-1 ring-gray-100 transition group-hover:scale-105">
                <Upload size={23} />
              </div>

              <p className="text-sm font-semibold text-gray-800">
                Click to upload your recording
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Select an audio or video file from your device
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-md border border-gray-200 bg-white px-2 py-1 text-xs text-gray-600">
                  <FileAudio size={14} />
                  Audio
                </span>
                <span className="inline-flex items-center gap-1 rounded-md border border-gray-200 bg-white px-2 py-1 text-xs text-gray-600">
                  <FileVideo size={14} />
                  Video
                </span>
              </div>

              <input
                id="interviewRecording"
                type="file"
                accept="audio/*,video/*"
                aria-invalid={!!errors.interviewRecording}
                {...register("interviewRecording")}
                className="sr-only"
              />
            </label>

            {errors.interviewRecording && (
              <ErrorMessage
                errorMessage={errors.interviewRecording.message}
              />
            )}

            <p className="mt-2 text-xs leading-5 text-gray-400">
              Upload one recording. Supported formats and maximum file size
              will depend on your upload requirements.
            </p>
          </section>

          {/* Additional Notes */}
          <section>
            <label
              htmlFor="interviewAdditionalNotes"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Additional Notes
              <span className="ml-1 text-xs font-normal text-gray-400">
                (Optional)
              </span>
            </label>

            <textarea
              id="interviewAdditionalNotes"
              rows={3}
              placeholder="Add any context or observations about this interview..."
              {...register("interviewAdditionalNotes")}
              className="w-full resize-y rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm leading-6 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
            />

            {errors.interviewAdditionalNotes && (
              <ErrorMessage
                errorMessage={errors.interviewAdditionalNotes.message}
              />
            )}
          </section>
        </div>

        {/* Footer */}
        <div className="flex flex-col-reverse gap-3 border-t border-gray-100 bg-gray-50/70 px-5 py-4 sm:flex-row sm:justify-end sm:px-8">
          <button
            type="button"
            className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
          >
            <FileCheck2 size={17} />
            Upload Interview
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadInterviewDetailsModal;
