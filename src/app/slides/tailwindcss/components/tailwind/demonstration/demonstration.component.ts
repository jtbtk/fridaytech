import { Component } from '@angular/core';

@Component({
  selector: 'app-tailwind-demonstration',
  templateUrl: './demonstration.component.html',
})
export class DemonstrationComponent {
  code_1 = `
<div class="w-56 h-56 bg-gray-200">
  <div class="w-1/2 h-1/2 bg-blue-200"></div>
</div>
`;

  code_2 = `
<div class="flex bg-gray-100">
  <div class="w-56 p-4 bg-blue-500">Padding</div>
  <div class="w-56 m-4 bg-red-500">Margin</div>
</div>
`;

  code_3 = `
<div class="block bg-gray-200">&nbsp;</div>
Ceci est
<div class="inline-block bg-gray-200">un</div>
exemple.
<div class="flex flex-col lg:flex-row">
  <div class="p-2 bg-red-500 w-100
              lg:hidden lg:w-1/3">1</div>
  <div class="invisible p-2 bg-blue-500 w-100
              lg:visible lg:w-1/3">2</div>
  <div class="p-2 bg-green-500 w-100
              lg:w-1/3">3</div>
</div>
`;

  code_4 = `
<div class="border border-b-4 border-orange-400 border-solid
            rounded-md rounded-b-xl border-b-slate-600">
</div>
`;

  code_5 = `
<div class="text-white bg-red-500">&nbsp;</div>
<div class="text-white bg-gradient-to-r
          from-red-500 to-yellow-500">
</div>
`;
  code_6 = `
<div class="p-4 text-xl font-bold text-left">Ceci</div>
<div class="p-4 text-lg text-center">est un</div>
<div class="p-4 text-right underline uppercase">exemple.</div>
`;

  code_7 = `
<div class="flex items-center justify-center w-32 transition
            duration-300 delay-150 border-b-8 border-orange-500
            rounded-full h-28 animate-spin bg-cyan-900
            hover:scale-110 hover:bg-cyan-500">
  <div class="w-32 h-2 transform rotate-45 bg-yellow-500
              rounded-full hover:bg-red-500 animate-ping">
              </div>
  <div class="w-32 h-2 transform -rotate-45 bg-yellow-500
              rounded-full hover:bg-red-500 animate-ping">
              </div>
</div>
`;
}
