/**
 * SPDX-FileCopyrightText: (c) 2024 Robert Tucker
 * SPDX-License-Identifier: MIT
 */

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer',
}

export default function Page() {
  return (
    <div className="mx-20 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
      {/* <section id="disclaimer" className="mt-8"> */}
      <h1 className="my-4 text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
        Disclaimer
      </h1>
      <p className="text-muted-foreground my-5">Last updated: November 15, 2024</p>
      <h2 className="my-4 text-xl font-bold tracking-tighter sm:text-3xl">
        Interpretation and Definitions
      </h2>
      <h3 className="my-3 text-xl tracking-tighter sm:text-2xl">Interpretation</h3>
      <p>
        The words of which the initial letter is capitalized have meanings defined under the
        following conditions. The following definitions shall have the same meaning regardless of
        whether they appear in singular or in plural.
      </p>
      <h3 className="my-3 text-xl tracking-tighter sm:text-2xl">Definitions</h3>
      <p>For the purposes of this Disclaimer:</p>
      <ul className="mx-10 list-disc">
        <li>
          <p>
            <strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;,
            &quot;Us&quot; or &quot;Our&quot; in this Disclaimer) refers to KFinder.
          </p>
        </li>
        <li>
          <p>
            <strong>Service</strong> refers to the Application.
          </p>
        </li>
        <li>
          <p>
            <strong>You</strong> means the individual accessing the Service, or the company, or
            other legal entity on behalf of which such individual is accessing or using the Service,
            as applicable.
          </p>
        </li>
        <li>
          <p>
            <strong>Application</strong> means the software program provided by the Company
            downloaded by You on any electronic device named KFinder.
          </p>
        </li>
      </ul>
      <h2 className="my-4 text-xl font-bold tracking-tighter sm:text-3xl">Disclaimer</h2>
      <p>The information contained on the Service is for general information purposes only.</p>
      <p>
        The Company assumes no responsibility for errors or omissions in the contents of the
        Service.
      </p>
      <p>
        In no event shall the Company be liable for any special, direct, indirect, consequential, or
        incidental damages or any damages whatsoever, whether in an action of contract, negligence
        or other tort, arising out of or in connection with the use of the Service or the contents
        of the Service. The Company reserves the right to make additions, deletions, or
        modifications to the contents on the Service at any time without prior notice.
      </p>
      <p>
        The Company does not warrant that the Service is free of viruses or other harmful
        components.
      </p>
      <h2 className="my-4 text-xl font-bold tracking-tighter sm:text-3xl">
        Medical Information Disclaimer
      </h2>
      <p>
        The information about health provided by the Service is not intended to diagnose, treat,
        cure or prevent disease. Products, services, information and other content provided by the
        Service, including information linking to third-party websites are provided for
        informational purposes only.
      </p>
      <p>
        Information offered by the Service is not comprehensive and does not cover all diseases,
        ailments, physical conditions or their treatment.
      </p>
      <p>
        Individuals are different and may react differently to different products. Comments made on
        the Service by employees or other users are strictly their own personal views made in their
        own personal capacity and are not claims made by the Company nor do they represent the
        position or view of the Company.
      </p>
      <p>
        The Company is not liable for any information provided by the Service with regard to
        recommendations regarding supplements for any health purposes.
      </p>
      <p>
        The Company makes no guarantee or warranty with respect to any products or services sold.
        The Company is not responsible for any damages for information or services provided even if
        the Company has been advised of the possibility of damages.
      </p>
      <h2 className="my-4 text-xl font-bold tracking-tighter sm:text-3xl">
        Fitness &amp; Nutritional Information Disclaimer
      </h2>
      <p>
        The Service can offer health, fitness and nutritional information including, without
        limitation, advice and recommendation, that is provided solely as general education and
        informational purposes.
      </p>
      <p>
        Use of the advice and information contained herein is at your sole choice and risk. You
        should not rely on this information as a substitute for, nor does it replace, professional
        medical advice, diagnosis, or treatment. Always consult your physician or healthcare
        provider before beginning any nutrition or exercise program.
      </p>
      <p>
        If You choose to use this information without prior consent of your physician, You are
        agreeing to accept full responsibility for your decisions and agreeing to hold harmless the
        Company.
      </p>
      <h2 className="my-4 text-xl font-bold tracking-tighter sm:text-3xl">
        External Links Disclaimer
      </h2>
      <p>
        The Service may contain links to external websites that are not provided or maintained by or
        in any way affiliated with the Company.
      </p>
      <p>
        Please note that the Company does not guarantee the accuracy, relevance, timeliness, or
        completeness of any information on these external websites.
      </p>
      <h2 className="my-4 text-xl font-bold tracking-tighter sm:text-3xl">
        Errors and Omissions Disclaimer
      </h2>
      <p>
        The information given by the Service is for general guidance on matters of interest only.
        Even if the Company takes every precaution to ensure that the content of the Service is both
        current and accurate, errors can occur. Plus, given the changing nature of laws, rules and
        regulations, there may be delays, omissions or inaccuracies in the information contained on
        the Service.
      </p>
      <p>
        The Company is not responsible for any errors or omissions, or for the results obtained from
        the use of this information.
      </p>
      <h2 className="my-4 text-xl font-bold tracking-tighter sm:text-3xl">Fair Use Disclaimer</h2>
      <p>
        The Company may use copyrighted material which has not always been specifically authorized
        by the copyright owner. The Company is making such material available for criticism,
        comment, news reporting, teaching, scholarship, or research.
      </p>
      <p>
        The Company believes this constitutes a &quot;fair use&quot; of any such copyrighted
        material as provided for in section 107 of the United States Copyright law.
      </p>
      <p>
        If You wish to use copyrighted material from the Service for your own purposes that go
        beyond fair use, You must obtain permission from the copyright owner.
      </p>
      <h2 className="my-4 text-xl font-bold tracking-tighter sm:text-3xl">
        Views Expressed Disclaimer
      </h2>
      <p>
        The Service may contain views and opinions which are those of the authors and do not
        necessarily reflect the official policy or position of any other author, agency,
        organization, employer or company, including the Company.
      </p>
      <p>
        Comments published by users are their sole responsibility and the users will take full
        responsibility, liability and blame for any libel or litigation that results from something
        written in or as a direct result of something written in a comment. The Company is not
        liable for any comment published by users and reserves the right to delete any comment for
        any reason whatsoever.
      </p>
      <h2 className="my-4 text-xl font-bold tracking-tighter sm:text-3xl">
        No Responsibility Disclaimer
      </h2>
      <p>
        The information on the Service is provided with the understanding that the Company is not
        herein engaged in rendering legal, accounting, tax, or other professional advice and
        services. As such, it should not be used as a substitute for consultation with professional
        accounting, tax, legal or other competent advisers.
      </p>
      <p>
        In no event shall the Company or its suppliers be liable for any special, incidental,
        indirect, or consequential damages whatsoever arising out of or in connection with your
        access or use or inability to access or use the Service.
      </p>
      <h2 className="my-4 text-xl font-bold tracking-tighter sm:text-3xl">
        &quot;Use at Your Own Risk&quot; Disclaimer
      </h2>
      <p>
        All information in the Service is provided &quot;as is&quot;, with no guarantee of
        completeness, accuracy, timeliness or of the results obtained from the use of this
        information, and without warranty of any kind, express or implied, including, but not
        limited to warranties of performance, merchantability and fitness for a particular purpose.
      </p>
      <p>
        The Company will not be liable to You or anyone else for any decision made or action taken
        in reliance on the information given by the Service or for any consequential, special or
        similar damages, even if advised of the possibility of such damages.
      </p>
      <h2 className="my-4 text-xl font-bold tracking-tighter sm:text-3xl">Contact Us</h2>
      <p>
        If you have any questions about this Disclaimer, You can contact Us by emailing:
        robertwtucker@gmail.com
      </p>
      {/* </section> */}
    </div>
  )
}
