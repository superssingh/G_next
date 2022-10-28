import Link from "next/link";
const Terms = () => {
  return (
    <div className="grid relative w-full place-items-center place-content-center text-sm showSlow ">
      <div className="gradientbg max-w-3xl shadow-lg drop-shadow-md border-y-2 border-slate-200/[.65] rounded-lg p-6 mb-6 md:mx-2">
        <h1 className=" text-xl font-bold text-center  mb-2 uppercase  text-gray-200">
          Website Terms and Conditions of Use
        </h1>
        <div className="terms rounded-lg text-xs">
          <h2>1. Terms</h2>

          <div>
            By accessing this Website, accessible from https://www.gogixer.com,
            you are agreeing to be bound by these Website Terms and Conditions
            of Use and agree that you are responsible for the agreement with any
            applicable local laws. If you disagree with any of these terms, you
            are prohibited from accessing this site. The materials contained in
            this Website are protected by copyright and trade mark law.
          </div>

          <h2>2. Use License</h2>

          <div>
            Permission is granted to temporarily download one copy of the
            materials on Gogixer's Website for personal, non-commercial
            transitory viewing only. This is the grant of a license, not a
            transfer of title, and under this license you may not:
          </div>

          <ul className="text-xs">
            <li className="text-xs">modify or copy the materials;</li>
            <li className="text-xs">
              use the materials for any commercial purpose or for any public
              display;
            </li>
            <li className="text-xs">
              attempt to reverse engineer any software contained on Gogixer's
              Website;
            </li>
            <li className="text-xs">
              remove any copyright or other proprietary notations from the
              materials; or
            </li>
            <li className="text-xs">
              transferring the materials to another person or "mirror" the
              materials on any other server.
            </li>
          </ul>

          <div>
            This will let Gogixer to terminate upon violations of any of these
            restrictions. Upon termination, your viewing right will also be
            terminated and you should destroy any downloaded materials in your
            possession whether it is printed or electronic format. These Terms
            of Service has been created with the help of the{" "}
            <a href="https://www.termsofservicegenerator.net">
              Terms Of Service Generator
            </a>
            .
          </div>

          <h2>3. Disclaimer</h2>

          <div>
            All the materials on Gogixer’s Website are provided "as is". Gogixer
            makes no warranties, may it be expressed or implied, therefore
            negates all other warranties. Furthermore, Gogixer does not make any
            representations concerning the accuracy or reliability of the use of
            the materials on its Website or otherwise relating to such materials
            or any sites linked to this Website.
          </div>

          <h2>4. Limitations</h2>

          <div>
            Gogixer or its suppliers will not be hold accountable for any
            damages that will arise with the use or inability to use the
            materials on Gogixer’s Website, even if Gogixer or an authorize
            representative of this Website has been notified, orally or written,
            of the possibility of such damage. Some jurisdiction does not allow
            limitations on implied warranties or limitations of liability for
            incidental damages, these limitations may not apply to you.
          </div>

          <h2>5. Revisions and Errata</h2>

          <div>
            The materials appearing on Gogixer’s Website may include technical,
            typographical, or photographic errors. Gogixer will not promise that
            any of the materials in this Website are accurate, complete, or
            current. Gogixer may change the materials contained on its Website
            at any time without notice. Gogixer does not make any commitment to
            update the materials.
          </div>

          <h2>6. Links</h2>

          <div>
            Gogixer has not reviewed all of the sites linked to its Website and
            is not responsible for the contents of any such linked site. The
            presence of any link does not imply endorsement by Gogixer of the
            site. The use of any linked website is at the user’s own risk.
          </div>

          <h2>7. Site Terms of Use Modifications</h2>

          <div>
            Gogixer may revise these Terms of Use for its Website at any time
            without prior notice. By using this Website, you are agreeing to be
            bound by the current version of these Terms and Conditions of Use.
          </div>

          <h2>8. Your Privacy</h2>

          <div className="flex">
            <div>Please read our Privacy Policy.</div>
            <Link href={"/privacypolicy"}>
              <span className="mx-2 rounded bg-violet-500 p-1 font-medium text-white hover:bg-violet-700">
                Click Here
              </span>
            </Link>
          </div>

          <h2>9. Governing Law</h2>

          <div>
            Any claim related to Gogixer's Website shall be governed by the laws
            of in without regards to its conflict of law provisions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
