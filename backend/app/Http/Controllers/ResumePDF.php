<?php

namespace App\Http\Controllers;
use PDF;
use Illuminate\Http\Request;
use App\Models\ResumeBasicInfo;
use Illuminate\Support\Facades\Storage;

class ResumePDF extends Controller
{
    public function index() 
    {
        $user = ResumeBasicInfo::where('user_id', 4)
        ->select('*')
        ->first();

        $pdf = PDF::loadView('testPDF', [
            'title' => $user->full_name,
            'description' => 'This is an example Laravel pdf tutorial.',
            'footer' => 'by <a href="https://codeanddeploy.com">codeanddeploy.com</a>'
        ]);
        
        $content = $pdf->output();
        
        Storage::disk('public')->put('assets/pdfs/sample3.pdf',$content);
        // $content = $pdf->download()->getOriginalContent();
        // Storage::put('./sample.pdf',$content);
        // return url('storage/app/assets/pdfs/sample3.pdf');
        //return env('APP_URL').Storage::disk('local')->url('app/assets/pdfs/sample3.pdf');
        $url = Storage::disk('public')->url('assets/pdfs/sample3.pdf');
        //return response()->json(['pdfurl'=>$url])->header('Access-Control-Allow-Origin', '*')->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');;
        return response()->json(['pdfurl'=>$url, 'content'=>base64_encode($content)],201);
    }

    public function testing(ResumeBasicInfo $resumeBasicInfo){
        $user = ResumeBasicInfo::where('user_id', 4)
        ->select('*')
        ->first();

        $pdf = PDF::loadView('testPDF', [
            'title' => $user->full_name,
            'description' => 'This is an example Laravel pdf tutorial.',
            'footer' => 'by <a href="https://codeanddeploy.com">codeanddeploy.com</a>'
        ]);
        
        $content = $pdf->output();
        return $content;
    }

}
