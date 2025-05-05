
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Banknote, Mail } from 'lucide-react';

const DonationMethodsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mx-auto">Other Ways to Donate</h2>
        <p className="text-center text-lg text-gaza-dark max-w-2xl mx-auto mb-12">
          In addition to online donations, you can support our work through bank transfers or by contacting us directly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Bank Transfer Card */}
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-gaza-primary flex items-center justify-center mr-3">
                  <Banknote className="text-white" size={20} />
                </div>
                <CardTitle className="text-gaza-primary">Bank Transfer</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-medium text-gaza-dark">Account Name:</p>
                <p>Gaza Aid Initiative</p>
              </div>
              <div>
                <p className="font-medium text-gaza-dark">Bank Name:</p>
                <p>International Humanitarian Bank</p>
              </div>
              <div>
                <p className="font-medium text-gaza-dark">Account Number:</p>
                <p>1234-5678-9012-3456</p>
              </div>
              <div>
                <p className="font-medium text-gaza-dark">SWIFT/BIC Code:</p>
                <p>IHBGZA22</p>
              </div>
              <div>
                <p className="font-medium text-gaza-dark">Reference:</p>
                <p>Please include "Gaza Aid" as reference</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Card */}
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-gaza-accent flex items-center justify-center mr-3">
                  <Mail className="text-white" size={20} />
                </div>
                <CardTitle className="text-gaza-primary">Contact Us</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                For larger donations or corporate partnerships, please contact our donations team directly:
              </p>
              <div>
                <p className="font-medium text-gaza-dark">Email:</p>
                <a href="mailto:donations@gazaaid.org" className="text-gaza-accent hover:underline">
                  donations@gazaaid.org
                </a>
              </div>
              <div>
                <p className="font-medium text-gaza-dark">Phone:</p>
                <p>+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="font-medium text-gaza-dark">Office Hours:</p>
                <p>Monday - Friday: 9am - 5pm (EST)</p>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Our team will respond to your inquiry within 24 hours and can provide tax deduction information for your country.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DonationMethodsSection;
