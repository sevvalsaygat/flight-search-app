import React from "react";

import { Icons } from "@app/components";

type CampaignSectionPropTypes = {};

const CampaignSection: React.FC<CampaignSectionPropTypes> = () => {
  return (
    <div className="flex flex-col mx-auto mb-10 items-center justify-center">
      <div className="flex flex-row mx-auto items-center justify-center w-fit gap-8">
        <div className="flex flex-col items-center justify-center gap-1 my-10">
          <div className="border p-6 cursor-pointer border-rose-200 hover:border-rose-300/30 hover:bg-rose-100 shadow-sm rounded-md">
            <Icons.SvgPhoneShake className="w-10 h-10 text-purple-900" />
          </div>
          <div className="text-purple-900 text-xs cursor-pointer">
            Shake & Fly
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 my-10">
          <div className="border p-6 cursor-pointer border-rose-200 hover:border-rose-300/30 hover:bg-rose-100 shadow-sm rounded-md">
            <Icons.SvgTicket className="w-10 h-10 text-purple-900" />
          </div>
          <div className="text-purple-900 text-xs cursor-pointer">
            Online Ticket
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 my-10">
          <div className="border p-6 cursor-pointer border-rose-200 hover:border-rose-300/30 hover:bg-rose-100 shadow-sm rounded-md">
            <Icons.SvgOnlineCheckIn className="w-10 h-10 text-purple-900" />
          </div>
          <div className="text-purple-900 text-xs cursor-pointer">
            Online Check-in
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 my-10">
          <div className="border p-6 cursor-pointer border-rose-200 hover:border-rose-300/30 hover:bg-rose-100 shadow-sm rounded-md">
            <Icons.SvgInvoice className="w-10 h-10 text-purple-900" />
          </div>
          <div className="text-purple-900 text-xs cursor-pointer">
            View Invoice
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 my-10">
          <div className="border p-6 cursor-pointer border-rose-200 hover:border-rose-300/30 hover:bg-rose-100 shadow-sm rounded-md">
            <Icons.SvgPhoneCall className="w-10 h-10 text-purple-900" />
          </div>
          <div className="text-purple-900 text-xs cursor-pointer">
            Free Call Center
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 my-10">
          <div className="border p-6 cursor-pointer border-rose-200 hover:border-rose-300/30 hover:bg-rose-100 shadow-sm rounded-md">
            <Icons.SvgShoppingBag className="w-10 h-10 text-purple-900" />
          </div>
          <div className="text-purple-900 text-xs cursor-pointer">Prices</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 my-10">
          <div className="border p-6 cursor-pointer border-rose-200 hover:border-rose-300/30 hover:bg-rose-100 shadow-sm rounded-md">
            <Icons.SvgFlight className="w-10 h-10 text-purple-900" />
          </div>
          <div className="text-purple-900 text-xs cursor-pointer">
            Ticket Insurance
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 my-10">
          <div className="border p-6 cursor-pointer border-rose-200 hover:border-rose-300/30 hover:bg-rose-100 shadow-sm rounded-md">
            <Icons.SvgBriefCase className="w-10 h-10 text-purple-900" />
          </div>
          <div className="text-purple-900 text-xs cursor-pointer">
            For My Job
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <div className="flex flex-col border border-rose-200 max-w-56 items-center px-4 pt-8 pb-4 gap-4 cursor-pointer hover:bg-rose-100 rounded-lg">
          <Icons.SvgFlying className="text-rose-800" />
          <div className="text-base font-medium text-slate-900">
            Countless Options
          </div>
          <div className="flex items-center text-slate-800 text-sm">
            Special flights from more than 100 airlines We compare and offer the
            cheapest flight tickets of airlines.
          </div>
        </div>
        <div className="flex flex-col border border-rose-200 max-w-56 items-center px-4 pt-8 pb-4 gap-4 cursor-pointer hover:bg-rose-100 rounded-lg">
          <Icons.SvgAffordableTicket className="text-rose-800" />
          <div className="text-base font-medium text-slate-900">
            Most Affordable Ticket
          </div>
          <div className="flex items-center text-slate-800 text-sm">
            Filter the numerous ticket options according to price, flight times,
            airline and easily choose the most suitable ticket.
          </div>
        </div>
        <div className="flex flex-col border border-rose-200 max-w-56 items-center px-4 pt-8 pb-4 gap-4 cursor-pointer hover:bg-rose-100 rounded-lg">
          <Icons.SvgTrust className="text-rose-800" />
          <div className="text-base font-medium text-slate-900">
            Buy With Confidence
          </div>
          <div className="flex items-center text-slate-800 text-sm">
            All your payment transactions are protected.
          </div>
        </div>
        <div className="flex flex-col border border-rose-200 max-w-56 items-center px-4 pt-8 pb-4 gap-4 cursor-pointer hover:bg-rose-100 rounded-lg">
          <Icons.SvgCup className="text-rose-800" />
          <div className="text-base font-medium text-slate-900">
            Quick and Easy
          </div>
          <div className="flex items-center text-slate-800 text-sm">
            Buy the flight ticket that suits you best quickly and easily with
            just a few clicks.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignSection;
