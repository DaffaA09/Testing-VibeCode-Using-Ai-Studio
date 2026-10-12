import React, { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Mail, MapPin, Send, CheckCircle2, AlertTriangle, MessageSquare, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Nama lengkap wajib diisi.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Alamat email wajib diisi.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Format email tidak valid (contoh: nama@domain.com).';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Subjek atau jenis kerja sama wajib diisi.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Pesan atau rincian proyek wajib diisi.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Pesan minimal terdiri dari 10 karakter.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData({ ...formData });
      // Reset form fields
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }
  };

  const mailtoUrl = `mailto:hello@indokreasi.games?subject=${encodeURIComponent(
    formData.subject || 'Game Studio Inquiry - PT Indo Kreasi'
  )}&body=${encodeURIComponent(
    `Halo Tim Indo Kreasi,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-24 bg-[#182536] relative border-t-4 border-[#285943]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="GET IN TOUCH"
          title="LET'S BUILD SOMETHING GREAT"
          subtitle="Punya ide game revolusioner, kebutuhan aset voxel, atau ingin menjajaki penerbitan bersama? Hubungi tim studio kami sekarang."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Channels & Location */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#1E293B] border-4 border-[#182536] p-6 sm:p-8 shadow-[6px_6px_0px_#182536]">
              <h3 className="font-pixel text-base text-[#F5C84C] mb-4">
                INFORMASI KANTOR STUDIO
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#62B34D] border-2 border-[#182536] flex items-center justify-center shrink-0 text-[#182536]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-silkscreen text-xs">Lokasi Studio:</strong>
                    <span>Jakarta Digital Creative Hub, DKI Jakarta, Indonesia</span>
                    <span className="block text-[10px] text-slate-400 mt-0.5">(Placeholder Alamat Resmi)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#79C9F2] border-2 border-[#182536] flex items-center justify-center shrink-0 text-[#182536]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-silkscreen text-xs">Email Korespondensi:</strong>
                    <a
                      href="mailto:hello@indokreasi.games"
                      className="text-[#F5C84C] hover:underline"
                    >
                      hello@indokreasi.games
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#EC4899] border-2 border-[#182536] flex items-center justify-center shrink-0 text-[#182536]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-silkscreen text-xs">Komunitas & Media:</strong>
                    <span>Discord Studio, Twitter/X @IndoKreasiGames, itch.io</span>
                  </div>
                </div>
              </div>

              {/* Direct Mailto Button */}
              <div className="mt-6 pt-5 border-t border-slate-700">
                <a
                  href="mailto:hello@indokreasi.games"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#1E293B] hover:bg-slate-700 text-[#F5C84C] border-2 border-[#F5C84C] font-pixel text-xs transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>BUKA CLIENT EMAIL (MAILTO)</span>
                </a>
              </div>
            </div>

            {/* Note box on confidentiality and scope */}
            <div className="p-4 bg-[#111827] border-2 border-slate-700 text-xs text-slate-300">
              <strong className="text-[#62B34D] font-pixel text-xs block mb-1">
                JAMINAN KERAHASIAAN IDE (NDA):
              </strong>
              Kami menghargai orisinalitas intellectual property Anda. Indo Kreasi siap menandatangani mutual Non-Disclosure Agreement (NDA) sebelum pembahasan detail pitch deck.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#1E293B] border-4 border-[#182536] p-6 sm:p-8 shadow-[6px_6px_0px_#182536]">
              <h3 className="font-pixel text-base text-[#F7F7F0] mb-2">
                KIRIM PESAN KERJA SAMA
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Silakan isi formulir di bawah ini untuk konsultasi proyek atau permohonan portofolio pitch deck.
              </p>

              {/* Success Notification (Conforming to FR-007 frontend-only requirements) */}
              {submittedData && (
                <div className="mb-6 p-4 bg-emerald-950/80 border-3 border-[#62B34D] text-emerald-100 text-xs space-y-2 animate-fade-in">
                  <div className="flex items-center gap-2 font-pixel text-xs text-[#62B34D]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>VALIDASI FORMULIR BERHASIL!</span>
                  </div>
                  <p className="leading-relaxed">
                    Terima kasih, <strong className="text-white">{submittedData.name}</strong>! Data pesan Anda telah berhasil divalidasi di browser.
                  </p>
                  <div className="p-2.5 bg-black/40 border border-emerald-800 text-[11px] text-emerald-300">
                    <strong>Catatan Frontend Demo (PRD FR-007):</strong> Website ini berjalan pada mode statis murni tanpa server database. Untuk mengirim pesan nyata ke tim kami, Anda dapat langsung mengirim email via tautan di bawah ini:
                  </div>
                  <div className="pt-1">
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#62B34D] text-[#182536] font-pixel text-[10px] hover:bg-[#F5C84C] transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>KIRIM VIA EMAIL SEKARANG</span>
                    </a>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-pixel text-slate-300 mb-1.5">
                    NAMA LENGKAP *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Arya Dewantara"
                    className={`w-full bg-[#0F172A] border-2 p-3 text-xs sm:text-sm text-white focus:outline-none ${
                      errors.name ? 'border-red-500' : 'border-slate-700 focus:border-[#62B34D]'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-400 mt-1 block font-mono">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-pixel text-slate-300 mb-1.5">
                    ALAMAT EMAIL *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@perusahaan.com"
                    className={`w-full bg-[#0F172A] border-2 p-3 text-xs sm:text-sm text-white focus:outline-none ${
                      errors.email ? 'border-red-500' : 'border-slate-700 focus:border-[#62B34D]'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-400 mt-1 block font-mono">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-pixel text-slate-300 mb-1.5">
                    SUBJEK / BIDANG PROYEK *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Contoh: Full Game Development / Voxel Asset Outsource"
                    className={`w-full bg-[#0F172A] border-2 p-3 text-xs sm:text-sm text-white focus:outline-none ${
                      errors.subject ? 'border-red-500' : 'border-slate-700 focus:border-[#62B34D]'
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-red-400 mt-1 block font-mono">
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-pixel text-slate-300 mb-1.5">
                    PESAN & DETAIL KERJA SAMA *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ceritakan gambaran game, timeline estimasi, atau ruang lingkup yang Anda perlukan..."
                    className={`w-full bg-[#0F172A] border-2 p-3 text-xs sm:text-sm text-white focus:outline-none resize-none ${
                      errors.message ? 'border-red-500' : 'border-slate-700 focus:border-[#62B34D]'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-400 mt-1 block font-mono">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#62B34D] hover:bg-[#F5C84C] text-[#182536] font-pixel text-xs tracking-wider border-4 border-[#182536] shadow-[4px_4px_0px_#182536] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>KIRIMKAN FORMULIR INQUIRY</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
