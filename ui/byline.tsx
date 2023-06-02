import { VercelLogo } from '#/ui/vercel-logo';
import AppLogo from './AppLogo';

export default function Byline({ className }: { className: string }) {
  return (
    <div
      className={`${className} bg-vc-border-gradient inset-x-0 bottom-3 left-auto right-3 mx-3 w-[300px] rounded-lg p-px shadow-lg shadow-black/20`}
    >
      <div className="flex flex-col items-center justify-between space-y-2 rounded-lg bg-black p-3.5 lg:px-5 lg:py-3">
        <div className="flex items-center gap-x-1.5">
          <div className="text-sm text-gray-400">By</div>
          <a href="https://formzillion.com" title="Vercel">
            <div className="w-32 text-gray-100 hover:text-gray-50">
              <AppLogo />
            </div>
          </a>
        </div>

        <div className="text-sm text-gray-400">
          <a
            className="underline decoration-dotted underline-offset-4 transition-colors hover:text-gray-300"
            href="https://github.com/vercel/app-playground"
            target="_blank"
            rel="noreferrer"
          >
            View code
          </a>
          {' or '}
          <a
            className="underline decoration-dotted underline-offset-4 transition-colors hover:text-gray-300"
            href="https://app.formzillion.com/login"
            target="_blank"
            rel="noreferrer"
          >
            Let start with Formzillion
          </a>
        </div>
      </div>
    </div>
  );
}
