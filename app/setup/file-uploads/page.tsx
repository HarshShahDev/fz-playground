import Button from '#/ui/Buttons';
import { ExternalLink } from '#/ui/external-link';
import { Input } from '#/ui/input';
import Script from 'next/script';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <Script src="https://ucarecdn.com/libs/widget/3.x/uploadcare.full.min.js"></Script>
      <h1 className="text-xl font-bold">Recaptcha V3</h1>
      <form action="https://dev-app.formzillion.com/f/bNw3T01h" method="post">
        <div className=" mx-auto mb-4 justify-center space-y-5 rounded bg-gray-400/10 px-8 pb-8 pt-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-bold ">
              Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <label htmlFor="image" className="mb-2 block text-sm font-bold ">
              Image
            </label>
            <div className="upload">
              <input
                type="hidden"
                id="image"
                name="image"
                role="uploadcare-uploader"
                data-public-key={process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC}
              />
            </div>
          </div>
          <Button type="submit">Send</Button>
        </div>
      </form>
      <div className="flex gap-2">
        <ExternalLink
          href={`${process.env.NEXT_PUBLIC_DOCS_URL}/setup/file-uploads`}
        >
          Docs
        </ExternalLink>

        <ExternalLink href="#">Code</ExternalLink>
      </div>
    </div>
  );
}
