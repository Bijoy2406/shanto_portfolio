"use client";
import BonesSkeleton from "@/components/BonesSkeleton";

export default function Contact() {
  return (
    <main className="flex-grow bg-surface min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gray-900">
        <img
          alt="Keyboard Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_TIK-8zrNIA2UjmyvU7Omfab6Wp-jYlkpxpJ-y7z74XhnLYp93-EJMlaTxiXe_6mxnfDqopYxIPTn_wx5DtrNzaMhDkBcXdd9ZoDQVdd1RagsgmGEgZj7wsmkIdzMu2CxMSomA98WJ605HG4b-ZG5geyaGE92VOzeWzFlqX9VubWh5AQzit4RiaqeIm3Xlee8dY9saVd16siBn0gLa4reGxQL5KchU6TKuDvnLKeeqxPHLTkLVsoKAxWWorZGv1GcssvMOStVK7c"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-light tracking-widest uppercase">CONTACT</h1>
        </div>
      </section>

      {/* Main Content */}
      <BonesSkeleton name="contact-content" loading={false}>
      <div className="flex-grow container mx-auto px-6 py-16 flex flex-col items-center max-w-6xl">
        {/* Contact Card Section */}
        <div className="w-full flex flex-col md:flex-row shadow-xl mb-16 rounded overflow-hidden">
          {/* Profile Column */}
          <div className="bg-[#2d2d2d] text-white w-full md:w-1/3 p-8 flex flex-col items-center justify-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-gray-500">
              <img
                alt="Khondokar Shahriar Shanto"
                className="w-full h-full object-cover object-top"
                src="/me.webp"
              />
            </div>
            <h2 className="text-xl font-serif font-bold mb-2">Khondokar Shahriar Shanto</h2>
            <div className="w-12 h-0.5 bg-white mb-6"></div>
            <p className="text-sm text-gray-300">Replies in between 8 am to 5 pm (BDT)</p>
          </div>

          {/* Map Column */}
          <div className="w-full md:w-1/3 bg-gray-200 relative min-h-[300px]">
            <iframe
              title="Google Maps Location"
              className="absolute inset-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8287!2d90.4108614!3d23.757115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b880cc472ca1%3A0x70c5bd2107bcc46b!2sQC46%2BV8H%2C%20Modhubag%20Rd%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1715996400000"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Details Column */}
          <div className="bg-[#d1d5db] w-full md:w-1/3 p-8 flex flex-col justify-center text-gray-800">
            <p className="text-sm mb-6 text-center italic">
              [If you're interested in connecting or research collaboration, feel free to send me a message via LinkedIn or email me]
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <span className="text-sm">shahzada1456@gmail.com (Work email)</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm">shahzada1456@gmail.com (Secondary email)</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm">shahzada1456@gmail.com (Personal email)</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm">+8801904651273</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm">Modhubagh, Mogbazar, Dhaka</span>
              </div>
            </div>
            <div className="flex justify-center space-x-2">
              <a className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white" href="#"><span className="text-xs">Li</span></a>
              <a className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white" href="#"><span className="text-xs">in</span></a>
              <a className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white" href="#"><span className="text-xs">tw</span></a>
              <a className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white" href="#"><span className="text-xs">fb</span></a>
              <a className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white" href="#"><span className="text-xs">ig</span></a>
              <a className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white" href="#"><span className="text-xs">yt</span></a>
              <a className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white" href="#"><span className="text-xs">tg</span></a>
              <a className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white" href="#"><span className="text-xs">wa</span></a>
            </div>
          </div>
        </div>

        {/* QR Codes Section */}
        <div className="w-full border-t border-gray-300 pt-8">
          <h3 className="text-2xl font-serif font-bold mb-8 text-center">QR codes, Scan and find me!</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
            {/* QR Code Items */}
            <div className="flex flex-col items-center">
              <div className="border p-2 bg-white mb-2 shadow-sm rounded">
                <img alt="LinkedIn QR" className="w-24 h-24" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEyTd1hf5gR8sI7loNAgiEaZjpwHTRBWrSsLeet-9CF-cblyUMI53kSuESWwo6NTazqKDFUJO4O0mT_DpvEVaNPO-YLVgBzrKD00rWhxg3GR3gMOs-cV7htA9ulvyPGm50-dKixjKzdZ23Oi-MRgq4_i7vL95ARs2wXe5VvVSbiQxbg2rIJ_3iDXrWliD6ceLkE0RBt8DXDk2FAq4YNFH2okHHjfgIoBNKK7Q9sCAPI_IqBNS3a5PBd4mnlfeG_bJjHDauDMtwmH0" />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="border p-2 bg-white mb-2 shadow-sm rounded">
                <img alt="Facebook QR" className="w-24 h-24" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2zCQCrfM4YLJtj1pWIFr2dbnfsbTURD1_y9BROg-b-n64MIfHG2qL33dxz1dydFkvZm74tWCrKWvdDjg0UgJKsRNaFOMn2NQnOhqGtHXXBvs-kUwjlrl2R-ccTG3OILAn3RrlqPvGB6C75DKpyHsbehEvtk_DZobihu80IkwGErFi0dWLIY8-Eu-T6QYREkl2uSnQSDKzMyeOVdzwSPQqIb3B3ypXsHlK3FTIr_ZKGLreuP9Q9kLNGzSwQOnMfIKHe-7xy8ZUr80" />
              </div>
              <span className="text-sm font-medium">Facebook</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="border p-2 bg-white mb-2 shadow-sm rounded">
                <img alt="X QR" className="w-24 h-24" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVYl3w8nrYDNY7nf9sOm2_KKg99Bj_b5otDuil6wx3BYeJi8B7uE9LX3SiNPyvi13ZKhxwvuEk7klOmDMJsJgCjIjVxrcxKgOZpQIQhTf4Kr2lwvx1JWu5WS26TDqesrXeem1dByS4fPPrCxeDNZ4hFjKphpdDdCPY6_1PUEJuINEluA7pul_qXvl2oCC01qYvRMISma4G1iL1dK45w-ygypgBgFKaCT9DdVEOqJsTbxS1lfw1lQNaT1wG-e0rUShpaeeDFerRua4" />
              </div>
              <span className="text-sm font-medium">X</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="border p-2 bg-white mb-2 shadow-sm rounded">
                <img alt="Instagram QR" className="w-24 h-24" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDl2t3aB7uW5s2Ngk6gmggKnFymtco-wTlVI5L-KfxMuFVeRk4KEeqQIqwQWiJAGuCrx2ZpvQv3Qy5XSVdMoaYLp8cS4DajVRJxtYQIW2qjKGjmW4tEerl7QUnkwFML948IJbuMm9VHpMbL44odiVK149F5-1Klx_K7jc4BIU8cVbdRM1fwZ7d1FKVh1mt7FZYn4cjHAJcQUvDIqOxN5soa1yHofAnkBpupuvQykoOts2pawKMcSgJkIIUIfsWcphQwbp8KaCUzn8" />
              </div>
              <span className="text-sm font-medium">Instagram</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="border p-2 bg-white mb-2 shadow-sm rounded">
                <img alt="YouTube QR" className="w-24 h-24" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8NVh_-geds8LSsS0sOXnWcuFMgtkwckueBG6qIO6_tUgynpp6PwZAvUNPiR3_LMcDLhpXWmboihHgGpcY5ca5E20KIQXweHaq-W-jHqtzE81xZNuluTTjNUwo7Bzj-_qUDtQcV4ay8GESsGULIlqQkiSFBOuj3vRCEXKYKH4m50JunYZ6zk5ABkjyy1wEcIlO6Ti-bAa4DUEpEXLP-FebbwgVQSewzvRRS1O8AW76r-bPAMGw45oerr5huThn6IZt3DpHYLG4p90" />
              </div>
              <span className="text-sm font-medium">YouTube</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="border p-2 bg-white mb-2 shadow-sm rounded">
                <img alt="Academia.edu QR" className="w-24 h-24" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxj9oFBKyOni8YCIVjX_-L5umPZy-dEtAe0L1YjLaYeIx5A4Rn1BLjpwCBXI7piRQ3g14T9u4P4iNoV76OJQZvc1dXYHe67elPLMqoZKbWDvWBmw7a-j9oD2ovTlh1yksbH2liQm0c8zv6J6LJUyfiOr1_TxI8Iq8s8GLsV6DZYZzhKMS2dqtYd08De05cntTLGCHKSfbhOa8FcERDduM9pGBp2Vtf3VmYBqUUeVCd3_wl1Y6MW_ulJiiQpYNfo4HERuxADR4n4qw" />
              </div>
              <span className="text-sm font-medium">Academia.edu</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="border p-2 bg-white mb-2 shadow-sm rounded">
                <img alt="Google Scholar QR" className="w-24 h-24" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-r2V2WFsIEn2DhOc8NuOXP4T65khnMJG9zK3_CXYP_qjrcVF18R2oZ3l2eYwCfh-HRFDxKt-ova4uBH1jNNml57fW358B3N9rRpvWywN0VrPhIr92TeFwznddYVAvn6uHocmAzM-951abLTx0qvaB1oEJ4f2d481lDrm-39LkCr3dG1W5yjO4GVH6NTsMBnqAu0x9xuIGm1iAQ1dbmR5JN3BzSlmNUbzUiv8auRIsB63ET0h1vC1E34B2-YleOc4cXJZKMUh_sl8" />
              </div>
              <span className="text-sm font-medium">Google Scholar</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="border p-2 bg-white mb-2 shadow-sm rounded">
                <img alt="ResearchGate QR" className="w-24 h-24" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSmY_LpLWB6qII99mJ_PNDbsGcSkfg6oOG9lSaqaUi7HRNlxqdpjNwkONYV0AoKNrCepMAmgLlRjSMdmiKdqUYhNOtM5onSt32K3h18hnDbNjHGIzrc5arXzfBvlA20KVHWgVk_ChmR9680W6hMjVH5y4cT4VmcV_emT9xVewFBNVJ2V5KBb39vNqvem4B0tUZI7jcjj6sK6YXfHK5Fanmr4sTH0Jznr7pUmgfwiYEUVxjbwGBXs6vQlOYUcXJ3xkKzLd0-7tG7PU" />
              </div>
              <span className="text-sm font-medium">ResearchGate</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="border p-2 bg-white mb-2 shadow-sm rounded">
                <img alt="Scopus QR" className="w-24 h-24" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaBVaRKW77dE6f1tmq6VfjBafLbPUudqT2IrvsmtnA0iIIZOoY3xPw8EwqKPtvfy-B3CRSbaitDcTMZU4FB2mFNF4fI99gI6IAJmk4r41Kc5UQueXpWvcEqcgPHZsNz_EwzwlcY413msX4Fph4vCNlVhhpEW6iczp5bB7w3ZAtWrXSKPxV6OxjLaZmsiVLiOWjIluMU-IFmBftDaFeEalF8a2tJxgj7n5N0ZcM-JDn_r6WEp8S5ty8MHXuVNJyZP7qjn0DYdniYtk" />
              </div>
              <span className="text-sm font-medium">Scopus</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="border p-2 bg-white mb-2 shadow-sm rounded">
                <img alt="Web of Science QR" className="w-24 h-24" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTg2nzN8aBBUIeG_7qqRpPcuWbglKwTjIOpkXnmsLpRaDUIflxChsKL6Ky-y1dyXAIaW6I-OKP5LzcmINApyH6jIgwULm25slDDgO5iCp-0CMYUocXTtvLA4a-bHN0ce4hrX32ZVjcpA15AjwYSeQ4nOCDCrpQp4HqPzGEwyiB5oT2Qfek7TlDdfdGCR4mD5VKrFN0wfNFfeoyxpyU1_F-EyecTMNaKtRslkfA7RvxpTqPxQeTnwNV9b6WZkYnxYm0BhR5BtGK6bw" />
              </div>
              <span className="text-sm font-medium">Web of Science</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="border p-2 bg-white mb-2 shadow-sm rounded">
                <img alt="Orcid QR" className="w-24 h-24" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9_E3__hjJantkkiW0ncucCf3iUHxlPDK-Xh3TxR5ZhcWmPTNSmgAV1gG9ZhiFZm1DOJGf3Kn7SBNTv2u-qYVWvKguN81Ld084k4sOqVd6N0Y9r_gMyIFeJcit6OJAFCcP8KN7yc4CSYdmbewTDlEEL2CdjxTSE1SB-6QdaslbgBc9fHnfutlrloX_l2qA16-TcVVsqY_ufhRzc87vZAPDQh1MNGV3QM8qhcy5Xq-fKJML734U9Cm2zEg-MTD12y16cPtzRXVpEDU" />
              </div>
              <span className="text-sm font-medium">Orcid</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="border p-2 bg-white mb-2 shadow-sm rounded">
                <img alt="Kudos QR" className="w-24 h-24" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4yaPc_HCOvStGXeXPkcSc5IvhD3u-qoDax91jBbkEU-wqcHziUq3mXiKaJPwUxQ0a3buQh4gVORqUEmx-RZdWenSOyDJ403ZL8d05Wivfmqu15He5VjjN1yql7W9pnh1HOCGt9H4JRverEZh5kmehSrbOXEyL53fpJHrcFIvqwyl8ZVCkAnKIqwTvoUgwMytfP-LkhQWbOOocdl-ZukSKDSyfDgx9l1SeXHipt7b2kpRSqK07lAAKbT4jba1SMuXQN8EJ4IpZfVQ" />
              </div>
              <span className="text-sm font-medium">Kudos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 text-center text-sm text-gray-500 mt-auto">
        <div className="container mx-auto px-6">
          © 2026 Khondokar Shahriar Shanto.
        </div>
      </footer>
      </BonesSkeleton>
    </main>
  );
}
