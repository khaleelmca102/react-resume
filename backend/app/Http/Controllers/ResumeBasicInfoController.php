<?php

namespace App\Http\Controllers;

use App\Models\ResumeBasicInfo;
use Illuminate\Http\Request;
use App\Http\Requests\StoreResumeBasicInfoRequest;
use App\Http\Requests\UpdateResumeBasicInfoRequest;

class ResumeBasicInfoController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = ResumeBasicInfo::where('user_id', $request->user_id)
            ->select('full_name', 'phone_number')
            ->first();

        return $user;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreResumeBasicInfoRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreResumeBasicInfoRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ResumeBasicInfo  $resumeBasicInfo
     * @return \Illuminate\Http\Response
     */
    public function show(ResumeBasicInfo $resumeBasicInfo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ResumeBasicInfo  $resumeBasicInfo
     * @return \Illuminate\Http\Response
     */
    public function edit(ResumeBasicInfo $resumeBasicInfo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateResumeBasicInfoRequest  $request
     * @param  \App\Models\ResumeBasicInfo  $resumeBasicInfo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {        
        $user = ResumeBasicInfo::where('user_id',$request->user_id)->first();
        
        $user->update([
            'full_name'=>$request->full_name,
            'phone_number'=>$request->phone_number
        ]);

        return response()->json('Success');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ResumeBasicInfo  $resumeBasicInfo
     * @return \Illuminate\Http\Response
     */
    public function destroy(ResumeBasicInfo $resumeBasicInfo)
    {
        //
    }
}
