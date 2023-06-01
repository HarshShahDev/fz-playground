import Button from '#/ui/Buttons';
import { ExternalLink } from '#/ui/external-link';
import { Input } from '#/ui/input';

export default function Page() {
  return (
    <>
      <div className="prose prose-sm prose-invert max-w-none">
        <h1 className="text-xl font-bold">Honeypot</h1>

        <form action="https://dev-app.formzillion.com/f/jEgdOtAk" method="post">
          <div className=" mx-auto mb-4 justify-center rounded bg-gray-400/10 px-8 pb-8 pt-6 ">
            <div className="mb-4 mt-4 justify-center">
              <label
                className="mb-2 block text-sm font-bold "
                htmlFor="exampleInputEmail1"
              >
                Email address
              </label>
              <Input
                id="exampleInputEmail1"
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold"
                htmlFor="exampleInputName"
              >
                Name
              </label>
              <Input
                id="exampleInputName"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <input
              type="text"
              id="_honeypot"
              name="_honeypot"
              style={{ display: 'none' }}
            />

            <Button
              className="mt-4 font-bold text-white"
              type="submit"
              id="submit-btn"
            >
              Send
            </Button>
          </div>
        </form>
        <div className="flex gap-2">
          <ExternalLink
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/setup/spam-protection/honeypot`}
          >
            Docs
          </ExternalLink>

          <ExternalLink href="#">Code</ExternalLink>
        </div>
      </div>
    </>
  );
}
