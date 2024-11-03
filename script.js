let currentSlide = 1;
const totalSlides = 10;


const slides = [
    `
<div class="bg-blue-600 flex flex-col h-screen">
    <div class="flex-grow flex flex-col items-center justify-center px-8">
        <h2 class="text-4xl font-bold text-white mb-16 text-center" style="font-size: 2.5rem;"> NH증권 경영기획직무 AI 비즈니스솔루션 과정</h2>
        <div class="text-center mb-16">
            <h1 class="text-6xl font-bold text-white mb-8" style="font-size: 3rem;">실습 프롬프트</h1>
            <!-- 
            Add Export JSON button 
            <button onclick="extractSlideData()" class="px-4 py-2 bg-white text-blue-600 rounded hover:bg-blue-100 transition-colors">
                Export JSON
            </button>
            -->
        </div>
    </div>
</div>
    `,
    `
<div class="bg-blue-600 flex flex-col h-screen">
    <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">챗GPT를 이용한 금융시장조사 및 트렌드 분석</h2>
    <div class="flex-grow overflow-auto">
        <div class="space-y-6 px-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="space-y-6">
                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">1</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">첨부한 문서는 NH투자증권에서 발행한 애널리스트 보고서 입니다.<br>첨부 문서에서 언급한 주요 트렌드를 분석하세요.<br>이 과정에서 핵심 키워드, 주요 이슈, 섹터 전망, 해당 섹터의 기회와 위협 요소를 요약해서 정리하세요.<br>한국어로 답변하세요</p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="첨부한 문서는 NH투자증권에서 발행한 애널리스트 보고서 입니다.
첨부 문서에서 언급한 주요 트렌드를 분석하세요.
이 과정에서 핵심 키워드, 주요 이슈, 섹터 전망, 해당 섹터의 기회와 위협 요소를 요약해서 정리하세요.
한국어로 답변하세요">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">2</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">웹검색을 이용해서 향후 1년간 예상되는 섹터 핵심 트렌드를 정리하세요.<br>첨부한 문서에서 언급된 주요 이슈들의 실제 반영 가능성 및 그 외의 인사이트 내용을 더해주세요.<br>생각과정을 먼저 문서로 정리한 후 답변을 생성하세요.</p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="웹검색을 이용해서 향후 1년간 예상되는 섹터 핵심 트렌드를 정리하세요.
첨부한 문서에서 언급된 주요 이슈들의 실제 반영 가능성 및 그 외의 인사이트 내용을 더해주세요.
생각과정을 먼저 문서로 정리한 후 답변을 생성하세요.">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">3</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">향후 5년간 예상되는 장기적인 트렌드를 웹검색을 이용해 일목요연하게 정리하세요.</p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="향후 5년간 예상되는 장기적인 트렌드를 웹검색을 이용해 일목요연하게 정리하세요.">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                </div>
                <div class="mt-6 text-base">
                    <p class="bg-yellow-100 p-3 rounded-lg text-black" style="font-size: 1.25rem;">다음 파일을 첨부하세요:<br>
                    실습파일 폴더 > 1. 챗GPT를 이용한 금융시장조사 및 트렌드 분석 > 240829_엔비디아_Comment_vF.pdf<br>
                    실습파일 폴더 > 1. 챗GPT를 이용한 금융시장조사 및 트렌드 분석 > NH투자증권_삼성전자_20240731213651.pdf</p>
                </div>
            </div>
        </div>
    </div>
</div>
    `,

    `
    <div class="bg-blue-600 flex flex-col h-screen">
        <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">챗GPT를 이용한 회의록 작성 자동화</h2>
        <div class="flex-grow overflow-auto">
            <div class="space-y-6 px-8">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="space-y-6">
                        <div class="flex items-stretch">
                            <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">1</div>
                            <div class="flex-grow">
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">첨부한 파일은 회의의 녹취 내용을 텍스트로 변환한 데이터와 자사 회의록 포맷입니다.<br>이 데이터를 바탕으로 자사 포맷에 맞춰 회의록을 작성해 주세요.<br><br>#자사 회의록 포맷<br><br>1. 회의 일시 :<br>2. 참석자 :<br>3. 주요 의제 :<br>4. 결정사항 :<br>5. 추가 논의 사항:<br><br>위 포맷에 맞춰 회의 내용을 정리하고 Word 파일로 생성하세요.</p>
                            </div>
                            <div class="flex-shrink-0 ml-4 h-full">
                                <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                        data-copy-text="첨부한 파일은 회의의 녹취 내용을 텍스트로 변환한 데이터와 자사 회의록 포맷입니다.
이 데이터를 바탕으로 자사 포맷에 맞춰 회의록을 작성해 주세요.

#자사 회의록 포맷

1. 회의 일시 :
2. 참석자 :
3. 주요 의제 :
4. 결정사항 : 
5. 추가 논의 사항:

위 포맷에 맞춰 회의 내용을 정리하고 Word 파일로 생성하세요.">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                </div>
                <div class="mt-6 text-base">
                    <p class="bg-yellow-100 p-3 rounded-lg text-black" style="font-size: 1.25rem;">'<a href="https://clovanote.naver.com/" target="_blank" class="text-blue-600 hover:text-blue-800 underline">클로바노트</a>'를 사용하여 녹취한 음성파일을 TXT 파일로 변환한 첨부 파일을 이용합니다.</p>
                </div>
            </div>
        </div>
    </div>
</div>
    `,

`
    <div class="bg-blue-600 flex flex-col h-screen">
        <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">챗GPT를 이용한 한글/영어 이메일 작성 자동화</h2>
        <div class="flex-grow overflow-auto">
            <div class="space-y-6 px-8">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="space-y-6">
                        <div class="flex items-stretch">
                            <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">1</div>
                            <div class="flex-grow">
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">
                                첨부한 문서 '3. 이메일_ 발송 메일 내용 Sample.docx'의 '자문사 보수지급 세금계산서 발행' 예시를 참고하여, 모든 자문사에게 보낼 회신 메일을 작성해 주세요.<br>
<br>
각 자문사에 맞는 보수금액과 자사의 담당자 메일주소를 포함하도록, 첨부한 엑셀 파일 '3. 이메일_ 발송내용 Sample.xlsx'의 내용을 참고해 주세요.
                                </p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="첨부한 문서 '3. 이메일_ 발송 메일 내용 Sample.docx'의 '자문사 보수지급 세금계산서 발행' 예시를 참고하여, 모든 자문사에게 보낼 회신 메일을 작성해 주세요.

각 자문사에 맞는 보수금액과 자사의 담당자 메일주소를 포함하도록, 첨부한 엑셀 파일 '3. 이메일_ 발송내용 Sample.xlsx'의 내용을 참고해 주세요.">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">2</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">회신 이메일의 어조를 <span class="text-blue-600">공손하고 격식 있게</span> 변경해 주세요.<br> <span class="text-blue-600">(또는 친근하고 캐주얼하게)</span></p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="회신 이메일의 어조를 공손하고 격식 있게 변경해 주세요.">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">3</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">작성한 이메일을 영어로 번역해 주세요.</p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="작성한 이메일을 영어로 번역해 주세요.">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                </div>
                <div class="mt-6 text-base">
                    <p class="bg-yellow-100 p-3 rounded-lg text-black" style="font-size: 1.25rem;">다음 파일을 첨부하세요:<br>
                    실습파일 폴더 > 3. 이메일 > 3. 이메일_ 발송 메일 내용 Sample.docx<br>
                    실습파일 폴더 > 3. 이메일 > 3. 이메일_ 발송내용 Sample.xlsx</p>
                </div>
            </div>
        </div>
    </div>
</div>
    `,

    `
    <div class="bg-blue-600 flex flex-col h-screen">
        <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">챗GPT를 이용한 한글/영어 이메일 작성 자동화</h2>
        <div class="flex-grow overflow-auto">
            <div class="space-y-6 px-8">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="space-y-6">
                        <div class="flex items-stretch">
                            <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">1</div>
                            <div class="flex-grow">
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">첨부한 문서 '3. 이메일_ 발송 메일 내용 Sample.docx'의 'Case2 . 문제출제 요청 메일' 예시를 참고하여, 모든 부서에게 보낼 회신 메일을 작성해 주세요.<br>
<br>
각 부서에 맞는 ‘카테고리명‘과 ‘구분‘과 자사의 담당자 메일주소를 포함하도록, 첨부한 엑셀 파일 '3. 이메일_ 발송내용 Sample.xlsx'의 ‘case2.문제출제’ Tap 내용을 참고해 주세요.
</p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="첨부한 문서 '3. 이메일_ 발송 메일 내용 Sample.docx'의 'Case2 . 문제출제 요청 메일' 예시를 참고하여, 모든 부서에게 보낼 회신 메일을 작성해 주세요.

각 부서에 맞는 ‘카테고리명‘과 ‘구분‘과 자사의 담당자 메일주소를 포함하도록, 첨부한 엑셀 파일 '3. 이메일_ 발송내용 Sample.xlsx'의 ‘case2.문제출제’ Tap 내용을 참고해 주세요.">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">2</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">회신 이메일의 어조를 <span class="text-blue-600">공손하고 격식 있게</span> 변경해 주세요.<br> <span class="text-blue-600">(또는 친근하고 캐주얼하게)</span></p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="회신 이메일의 어조를 공손하고 격식 있게 변경해 주세요.">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">3</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">작성한 이메일을 영어로 번역해 주세요.</p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="작성한 이메일을 영어로 번역해 주세요.">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                </div>
                <div class="mt-6 text-base">
                    <p class="bg-yellow-100 p-3 rounded-lg text-black" style="font-size: 1.25rem;">다음 파일을 첨부하세요:<br>
                    실습파일 폴더 > 3. 이메일 > 3. 이메일_ 발송 메일 내용 Sample.docx<br>
                    실습파일 폴더 > 3. 이메일 > 3. 이메일_ 발송내용 Sample.xlsx</p>
                </div>
            </div>
        </div>
    </div>
</div>
    `,

    
`
<div class="bg-blue-600 flex flex-col h-screen">
    <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">보고서 작성 - 데이터 분석(고객판매데이터)</h2>
    <div class="flex-grow overflow-auto">
        <div class="space-y-6 px-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="space-y-6">
                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">1</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">이 파일을 읽고 EDA 분석을 진행하세요.<br>결과는 한글로 작성하세요.</p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="이 파일을 읽고 EDA 분석을 진행하세요.
결과는 한글로 작성하세요.">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">2</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">매입원가, 평가금액 열의 값을 바탕으로 수익률을 계산후, '수익률' 열을 추가하고 엑셀파일로 저장하세요.</p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="매입원가, 평가금액 열의 값을 바탕으로 수익률을 계산후, '수익률' 열을 추가하고 엑셀파일로 저장하세요.">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">3</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">전처리한 데이터를 사용하여 시각화 차트를 제작하세요.<br>데이터 분석 결과를 효과적으로 전달할 수 있는 적절한 차트 유형을 선택하고, 각 차트의 목적과 해석을 포함한 한글 보고서를 작성하세요.<br>(차트의 모든 텍스트는 영문으로 작성)</p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="전처리한 데이터를 사용하여 시각화 차트를 제작하세요.
데이터 분석 결과를 효과적으로 전달할 수 있는 적절한 차트 유형을 선택하고, 각 차트의 목적과 해석을 포함한 한글 보고서를 작성하세요.
(차트의 모든 텍스트는 영문으로 작성)">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                </div>
                <div class="mt-6 text-base">
                    <p class="bg-yellow-100 p-3 rounded-lg text-black" style="font-size: 1.25rem;">다음 파일을 첨부하세요:<br>
                    실습파일 폴더 > 8.고객성향별 상품 매칭 > Updated_고객투자성향및보유상품.xlsx</p>
                </div>
            </div>
        </div>
    </div>
</div>
`
,

`<div class="bg-blue-600 flex flex-col h-screen">
<h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">보고서 작성 - PPT 자동생성(텍스트, 이미지)</h2>
<div class="flex-grow overflow-auto">
    <div class="space-y-6 px-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="space-y-6">
                <div class="flex items-stretch">
                    <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">1</div>
                    <div class="flex-grow">
                        <p class="mb-2 text-lg" style="font-size: 1.25rem;">위 보고서를 바탕으로 8장의 슬라이드를 만들려고 합니다.<br>아래의 형식으로 슬라이드 아우트라인을 만드세요<br>각 내용을 언급할때 문서의 어느부분을 근거로 했는지 언급하세요.<br><br>#형식<br>* 1페이지 : 제목<br>* 2-6페이지 : 데이터를 통해 얻은 고객에 대한 인사이트<br>* 7페이지 : 결론<br>* 8페이지 : 마치는 말</p>
                    </div>
                    <div class="flex-shrink-0 ml-4 h-full">
                        <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                data-copy-text="위 보고서를 바탕으로 8장의 슬라이드를 만들려고 합니다.
아래의 형식으로 슬라이드 아우트라인을 만드세요
각 내용을 언급할때 문서의 어느부분을 근거로 했는지 언급하세요.

#형식
* 1페이지 : 제목
* 2-6페이지 : 데이터를 통해 얻은 고객에 대한 인사이트 
* 7페이지 : 결론
* 8페이지 : 마치는 말">
                            <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                            복사하기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`,
    `
    <div class="bg-blue-600 flex flex-col h-screen">
        <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">보도자료 GPTs 지침</h2>
        <div class="flex-grow overflow-auto">
            <div class="space-y-6 px-8">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="space-y-6">
                        <div class="flex items-stretch">
                            <div class="flex-grow">
                                <h3 class="text-2xl font-bold mb-4">Role</h3>
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">당신은 보도자료 작성 전문가입니다.<br>제공한 지식을 활용하여 사용자의 요청에 맞는 보도자료를 작성하세요.</p>
                                
                                <h3 class="text-2xl font-bold mb-4 mt-6">Objective</h3>
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">사용자의 요청을 바탕으로, 기존 보도자료 예시를 참고하여 비슷한 형식으로 보도자료를 작성합니다.<br>어떤 사전 지식을 활용했는지 가장 마지막에 언급하세요.</p>
                                
                                <h3 class="text-2xl font-bold mb-4 mt-6">PR information</h3>
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">- 주제 : NH투자증권, AI 기반 미국펀드 투자 어드바이저 'GPT 펀드매니저'런칭<br><br>- 강조점 : <br>[1] 챗GPT 최신 모델에 자사 데이터로 파인튜닝<br>[2] 전세계 최초 완전 자동화된 AI 투자 어드바이저 모델 개발<br>[3] 안정적인 성장세를 보이는 미국 펀드에 특화</p>
                            </div>
                            <div class="flex-shrink-0 ml-4 h-full">
                                <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                        data-copy-text="# Role
당신은 보도자료 작성 전문가입니다. 
제공한 지식을 활용하여 사용자의 요청에 맞는 보도자료를 작성하세요.

# Objective
사용자의 요청을 바탕으로, 기존 보도자료 예시를 참고하여 비슷한 형식으로 보도자료를 작성합니다.
어떤 사전 지식을 활용했는지 가장 마지막에 언급하세요.

#PR information
- 주제 : NH투자증권, AI 기반 미국펀드 투자 어드바이저 'GPT 펀드매니저'런칭 

- 강조점 : 
[1] 챗GPT 최신 모델에 자사 데이터로 파인튜닝
[2] 전세계 최초 완전 자동화된 AI 투자 어드바이저 모델 개발
[3] 안정적인 성장세를 보이는 미국 펀드에 특화">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                </div>
                <div class="mt-6 text-base">
                    <p class="bg-yellow-100 p-3 rounded-lg text-black" style="font-size: 1.25rem;">다음 파일을 첨부하세요:<br>
                    실습파일 폴더 > 2. 보도자료 > 2. 보도자료_나무증권브랜드페스타개최VV_기사양식.docx<br>
                    실습파일 폴더 > 2. 보도자료 > 2. 보도자료_어린이그림공모전_기사양식.docx<br>
                    실습파일 폴더 > 2. 보도자료 > 2. 보도자료_임직원자녀캠프 진행_홍보실 최종.docx</p>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
        `
        <div class="bg-blue-600 flex flex-col h-screen">
            <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">GPTs 제작 연습</h2>
            <div class="flex-grow overflow-auto">
                <div class="space-y-6 px-8">
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <div class="space-y-6">
                            <div class="flex items-stretch">
                                <div class="flex-grow">
                                    <h3 class="text-2xl font-bold mb-4">Role</h3>
                                    <p class="mb-2 text-lg" style="font-size: 1.25rem;">당신은 기업 분석 전문가입니다.<br>당신은 기업의 재무 정보와 뉴스를 분석하여 기업에 대한 정보를 일목요연하게 정리합니다.</p>
                                    
                                    <h3 class="text-2xl font-bold mb-4 mt-6">Objective</h3>
                                    <p class="mb-2 text-lg" style="font-size: 1.25rem;">사용자가 제시한 기업명에 대한 분석 보고서를 아래의 형식으로 작성해주세요.<br>가독성이 좋은 글머리를 이용하고 구성 요소별 다른 폰트 크기를 적용해 일목요연하게 작성해 주세요.</p>
                                    
                                    <h4 class="text-xl font-bold mb-2">1. 회사 개요</h4>
                                    <ul class="list-disc list-inside space-y-2 text-lg" style="font-size: 1.25rem;">
                                        <li>사업 포트폴리오에 대한 상세한 설명</li>
                                        <li>최근 1년 내 회사 동향 (주요 사건, 신제품 출시 등)</li>
                                    </ul>
                                    
                                    <h4 class="text-xl font-bold mb-2 mt-4">2. 산업 분석</h4>
                                    <ul class="list-disc list-inside space-y-2 text-lg" style="font-size: 1.25rem;">
                                        <li>시장 환경</li>
                                        <li>주요 경쟁사 및 시장 위치</li>
                                        <li>산업 동향 및 전망</li>
                                    </ul>
                                    
                                    <h4 class="text-xl font-bold mb-2 mt-4">3. 재무 분석</h4>
                                    <ul class="list-disc list-inside space-y-2 text-lg" style="font-size: 1.25rem;">
                                        <li>재무 상태</li>
                                        <li>실적</li>
                                    </ul>
                                </div>
                                <div class="flex-shrink-0 ml-4 h-full">
                                    <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                            data-copy-text="# Role
    당신은 기업 분석 전문가입니다. 
    당신은 기업의 재무 정보와 뉴스를 분석하여 기업에 대한 정보를 일목요연하게 정리합니다.
    
    # Objective
    사용자가 제시한 기업명에 대한 분석 보고서를 아래의 형식으로 작성해주세요.
    가독성이 좋은 글머리를 이용하고 구성 요소별 다른 폰트 크기를 적용해 일목요연하게 작성해 주세요.
    
    1. 회사 개요
    - 사업 포트폴리오에 대한 상세한 설명
    - 최근 1년 내 회사 동향 (주요 사건, 신제품 출시 등)
    
    2. 산업 분석
    - 시장 환경
    - 주요 경쟁사 및 시장 위치
    - 산업 동향 및 전망
    
    3. 재무 분석
    - 재무 상태
    - 실적">
                                        <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                        복사하기
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `,
            `
            <div class="bg-blue-600 flex flex-col h-screen">
                <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">사내 공지문 GPTs 지침</h2>
                <div class="flex-grow overflow-auto">
                    <div class="space-y-6 px-8">
                        <div class="bg-white p-6 rounded-lg shadow-md">
                            <div class="space-y-6">
                                <div class="flex items-stretch">
                                    <div class="flex-grow">
                                        <h3 class="text-2xl font-bold mb-4">Role</h3>
                                        <p class="mb-2 text-lg" style="font-size: 1.25rem;">당신은 자사 커뮤니케이션 담당자입니다.<br><br></p>
                                        
                                        <h3 class="text-2xl font-bold mb-4 mt-6">Objective</h3>
                                        <p class="mb-2 text-lg" style="font-size: 1.25rem;">사용자가 공지내용을 Text로 정보를 입력하면 미리 제공한 예시 파일을 기반으로 사용자가 전달하고자 하는 정보를 효과적으로 전달하는 공지문을 작성하세요.<br><br>정보가 명확하게 전달될 수 있도록 핵심 메시지를 강조하세요.</p>
                                        
                                        <h3 class="text-2xl font-bold mb-4 mt-6">Task</h3>
                                        <p class="mb-2 text-lg" style="font-size: 1.25rem;">[1] 적절한 예시 공지문을 스스로 선택하고 사용자에게 어떤 예시공지문을 참고할 것인지 구체적으로 출력하세요<br><br>공지문을 작성할 상황과 정보에 가장 적합한 스타일(공식적, 친근한, 간결한 등)을 기반으로 선택해 주세요.<br><br>[2] 선택한 예시 공지문의 스타일을 참고하여 유사한 형식과 톤을 유지해 주세요. 예시 공지문에서 사용한 구조, 언어, 톤을 반영하여 통일성을 유지하세요.</p>
                                    </div>
                                    <div class="flex-shrink-0 ml-4 h-full">
                                        <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                                data-copy-text="# Role
당신은 자사 커뮤니케이션 담당자입니다.

# Objective
사용자가 공지내용을 Text로 정보를 입력하면 미리 제공한 예시 파일을 기반으로 사용자가 전달하고자 하는 정보를 효과적으로 전달하는 공지문을 작성하세요. 
정보가 명확하게 전달될 수 있도록 핵심 메시지를 강조하세요.

# Task
[1] 적절한 예시 공지문을 스스로 선택하고 사용자에게 어떤 예시공지문을 참고할 것인지 구체적으로 출력하세요
공지문을 작성할 상황과 정보에 가장 적합한 스타일(공식적, 친근한, 간결한 등)을 기반으로 선택해 주세요.
[2] 선택한 예시 공지문의 스타일을 참고하여 유사한 형식과 톤을 유지해 주세요. 예시 공지문에서 사용한 구조, 언어, 톤을 반영하여 통일성을 유지하세요.">
                                        <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                        복사하기
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="mt-6 text-base">
                            <p class="bg-yellow-100 p-3 rounded-lg text-black" style="font-size: 1.25rem;">다음 파일을 첨부하세요:<br>
                            실습파일 폴더 > 4. 공지문 > 4. 공지문 작성_자격시험 취득과정 수강신청.ppt<br>
                            실습파일 폴더 > 4. 공지문 > 4. 공지문 작성_Python을 활용한 데이터 분석 과정.pptx</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `,
            `<div class="bg-blue-600 flex flex-col h-screen">
    <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">사내 공지문 GPTs 입력 내용 선택</h2>
    <div class="flex-grow overflow-auto">
        <div class="grid grid-cols-2 gap-6 px-8">
            <!-- 1번 항목 -->
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="flex items-stretch h-full">
                    <div class="flex-grow">
                        <p class="mb-2 text-lg" style="font-size: 1.25rem;">1. 2024 하반기 Global Insight 특강 시리즈<br><br>
                        * 대상: 전 임직원<br>
                        * 일정: 매월 마지막 주 수요일 16:00-17:30<br>
                        * 주요내용:<br>
                            * 글로벌 금융시장 트렌드 분석<br>
                            * 해외 유수 금융사 전문가 실시간 화상 강연<br>
                            * Q&A 세션 및 네트워킹<br>
                        * 신청방법: 사내 포털 'NH러닝센터' 접수<br>
                        * 참고사항: 영어 동시통역 제공, 온/오프라인 하이브리드 진행</p>
                    </div>
                    <div class="flex-shrink-0 ml-4">
                        <button class="copy-button px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full"
                                data-copy-text="1. 2024 하반기 Global Insight 특강 시리즈

* 대상: 전 임직원
* 일정: 매월 마지막 주 수요일 16:00-17:30
* 주요내용: 
    * 글로벌 금융시장 트렌드 분석
    * 해외 유수 금융사 전문가 실시간 화상 강연
    * Q&A 세션 및 네트워킹
* 신청방법: 사내 포털 'NH러닝센터' 접수
* 참고사항: 영어 동시통역 제공, 온/오프라인 하이브리드 진행">
                            <svg class="h-6 w-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                            복사
                        </button>
                    </div>
                </div>
            </div>

            <!-- 2번 항목 -->
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="flex items-stretch h-full">
                    <div class="flex-grow">
                        <p class="mb-2 text-lg" style="font-size: 1.25rem;">2. NH 디지털 혁신 아이디어 공모전<br><br>
                        * 대상: 전체 부서 및 지점<br>
                        * 일정: 접수기간 11월 1일 ~ 11월 30일<br>
                        * 포상:<br>
                            * 대상(1팀): 상금 500만원, 사장상<br>
                            * 최우수상(2팀): 상금 300만원, 부사장상<br>
                            * 우수상(3팀): 상금 100만원<br>
                        * 제출방법: 부서장 승인 후 혁신기획팀 이메일 접수<br>
                        * 주의사항: 실현 가능한 실무 적용 방안 필수 포함</p>
                    </div>
                    <div class="flex-shrink-0 ml-4">
                        <button class="copy-button px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full"
                                data-copy-text="2. NH 디지털 혁신 아이디어 공모전

* 대상: 전체 부서 및 지점
* 일정: 접수기간 11월 1일 ~ 11월 30일
* 포상: 
    * 대상(1팀): 상금 500만원, 사장상
    * 최우수상(2팀): 상금 300만원, 부사장상
    * 우수상(3팀): 상금 100만원
* 제출방법: 부서장 승인 후 혁신기획팀 이메일 접수
* 주의사항: 실현 가능한 실무 적용 방안 필수 포함">
                            <svg class="h-6 w-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                            복사
                        </button>
                    </div>
                </div>
            </div>

            <!-- 3번 항목 -->
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="flex items-stretch h-full">
                    <div class="flex-grow">
                        <p class="mb-2 text-lg" style="font-size: 1.25rem;">3. 2024 NH 멘토링 프로그램<br><br>
                        대상: 입사 3년 미만 직원(멘티), 차장급 이상(멘토)<br>
                        일정: 12월 ~ 익년 5월(6개월)<br>
                        지원사항:<br>
                        활동비 월 30만원<br>
                        우수 멘토링 팀 포상<br>
                        멘토 승진가점 부여<br>
                        신청방법: 인사부 멘토링 담당자 이메일<br>
                        주의사항: 월 1회 이상 대면 미팅 필수</p>
                    </div>
                    <div class="flex-shrink-0 ml-4">
                        <button class="copy-button px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full"
                                data-copy-text="3. 2024 NH 멘토링 프로그램

대상: 입사 3년 미만 직원(멘티), 차장급 이상(멘토)
일정: 12월 ~ 익년 5월(6개월)
지원사항: 
활동비 월 30만원
우수 멘토링 팀 포상
멘토 승진가점 부여
신청방법: 인사부 멘토링 담당자 이메일
주의사항: 월 1회 이상 대면 미팅 필수">
                            <svg class="h-6 w-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                            복사
                        </button>
                    </div>
                </div>
            </div>

            <!-- 4번 항목 -->
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="flex items-stretch h-full">
                    <div class="flex-grow">
                        <p class="mb-2 text-lg" style="font-size: 1.25rem;">4. ESG 실천 캠페인 'Green NH'<br><br>
                        대상: 전 부서 및 영업점<br>
                        일정: 연중 상시<br>
                        주요활동:<br>
                        페이퍼리스 실천<br>
                        에너지 절약<br>
                        친환경 출퇴근 인증<br>
                        참여방법: 모바일 앱 'NH eco' 활용<br>
                        인센티브: 우수부서 분기별 포상, 개인 마일리지 적립</p>
                    </div>
                    <div class="flex-shrink-0 ml-4">
                        <button class="copy-button px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full"
                                data-copy-text="4. ESG 실천 캠페인 'Green NH'

대상: 전 부서 및 영업점
일정: 연중 상시
주요활동: 
페이퍼리스 실천
에너지 절약 
친환경 출퇴근 인증
참여방법: 모바일 앱 'NH eco' 활용
인센티브: 우수부서 분기별 포상, 개인 마일리지 적립">
                            <svg class="h-6 w-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                            복사
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,
            `<div class="bg-blue-600 flex flex-col h-screen">
            <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">템플릿 기반 이메일 생성 자동화 GPTs 지침</h2>
            <div class="flex-grow overflow-auto">
                <div class="space-y-6 px-8">
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <div class="space-y-6">
                            <div class="flex items-stretch">
                                <div class="flex-grow">
                                    <h3 class="text-2xl font-bold mb-4">Role</h3>
                                    <p class="mb-2 text-lg" style="font-size: 1.25rem;">당신은 자사 커뮤니케이션 담당자입니다.<br>제공한 이메일 템플릿과 데이터를 활용하여 기업명 또는 부서명에 맞는 맞춤형 이메일을 작성합니다.</p>
                                    
                                    <h3 class="text-2xl font-bold mb-4 mt-6">Objective</h3>
                                    <p class="mb-2 text-lg" style="font-size: 1.25rem;">사용자가 기업명 또는 부서명을 입력하면, 해당 기업 또는 부서의 정보를 바탕으로 이메일을 작성해 주세요.<br>이메일에는 맞춤 정보와 자사 담당자 메일주소가 포함되어야 합니다.</p>
                                    
                                    <h3 class="text-2xl font-bold mb-4 mt-6">Data Sources</h3>
                                    <p class="mb-2 text-lg" style="font-size: 1.25rem;">이메일 템플릿: 3. 이메일_ 발송 메일 내용 Sample.docx<br>데이터 파일: 3. 이메일_ 발송내용 Sample.xlsx</p>
        
                                    <h3 class="text-2xl font-bold mb-4 mt-6">Instructions</h3>
                                    <p class="mb-2 text-lg" style="font-size: 1.25rem;">-데이터 조회<br>--입력한 기업명 또는 부서명을 3. 이메일_ 발송내용 Sample.xlsx 파일에서 검색합니다. 모든 시트를 읽고 답변하세요<br>- 템플릿 선택<br>--사용자 입력값이 기업명인 경우: [Case 1] 템플릿 사용<br>--사용자 입력값이 부서명인 경우: [Case 2] 템플릿 사용<br>- 정보 채우기<br>--템플릿의 변수 부분을 데이터 파일에서 해당하는 값으로 대체합니다.<br>---변수예시: 보수금액, 카테고리명, 구분, 담당자 메일주소<br>-이메일 작성<br>--정중하고 전문적인 어투로 이메일을 작성합니다.<br>--필요한 경우 첨부 파일명을 언급하세요<br>-검토<br>--모든 맞춤 정보와 자사 담당자 메일주소가 정확하게 포함되었는지 확인합니다.</p>
                                </div>
                                <div class="flex-shrink-0 ml-4 h-full">
                                    <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                            data-copy-text="# Role
        당신은 자사 커뮤니케이션 담당자입니다.
        제공한 이메일 템플릿과 데이터를 활용하여 기업명 또는 부서명에 맞는 맞춤형 이메일을 작성합니다.
        
        # Objective
        사용자가 기업명 또는 부서명을 입력하면, 해당 기업 또는 부서의 정보를 바탕으로 이메일을 작성해 주세요.
        이메일에는 맞춤 정보와 자사 담당자 메일주소가 포함되어야 합니다.
        
        # Data Sources
        이메일 템플릿: 3. 이메일_ 발송 메일 내용 Sample.docx
        데이터 파일: 3. 이메일_ 발송내용 Sample.xlsx
        
        # Instructions
        -데이터 조회
        --입력한 기업명 또는 부서명을 3. 이메일_ 발송내용 Sample.xlsx 파일에서 검색합니다. 모든 시트를 읽고 답변하세요
        - 템플릿 선택
        --사용자 입력값이 기업명인 경우: [Case 1] 템플릿 사용
        --사용자 입력값이 부서명인 경우: [Case 2] 템플릿 사용
        - 정보 채우기
        --템플릿의 변수 부분을 데이터 파일에서 해당하는 값으로 대체합니다.
        ---변수예시: 보수금액, 카테고리명, 구분, 담당자 메일주소
        -이메일 작성
        --정중하고 전문적인 어투로 이메일을 작성합니다.
        --필요한 경우 첨부 파일명을 언급하세요
        -검토
        --모든 맞춤 정보와 자사 담당자 메일주소가 정확하게 포함되었는지 확인합니다.">
                                        <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                        복사하기
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="mt-6 text-base">
                            <p class="bg-yellow-100 p-3 rounded-lg text-black" style="font-size: 1.25rem;">다음 파일을 첨부하세요:<br>
                            실습파일 폴더 > 3. 이메일 > 3. 이메일_ 발송 메일 내용 Sample.docx<br>
                            실습파일 폴더 > 3. 이메일 > 3. 이메일_ 발송내용 Sample.xlsx</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
        `<div class="bg-blue-600 flex flex-col h-screen">
    <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">일간/주간/월간 리포트 생성</h2>
    <div class="flex-grow overflow-auto">
        <div class="space-y-6 px-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="space-y-6">
                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">1</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">첨부한 아래 두개의 문서를 읽고 과제를 수행하세요<br><br>
                            1. 애널리스트 리포트<br>
                            2. 보고서 템플릿<br><br>
                            #Task<br>
                            첨부한 애널리스트 리포트를 분석하고, '보고서_템플릿.docx' 문서의 템플릿에 맞게 보고서를 작성하세요<br>
                            보고서_템플릿의 모든 플레이스홀더([{{...}}])에 필요한 내용을 리포트에서 추출해 채우세요<br><br>
                            최종 보고서는 명확하고 일관된 구조를 갖추며, 전문 용어를 최소화한 쉬운 한글로 작성하세요</p>
                        </div>
                        <div class="flex-shrink-0 ml-4">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="첨부한 아래 두개의 문서를 읽고 과제를 수행하세요

1. 애널리스트 리포트
2. 보고서 템플릿

#Task
첨부한 애널리스트 리포트를 분석하고, '보고서_템플릿.docx' 문서의 템플릿에 맞게 보고서를 작성하세요
보고서_템플릿의 모든 플레이스홀더({{...}})에 필요한 내용을 리포트에서 추출해 채우세요 

최종 보고서는 명확하고 일관된 구조를 갖추며, 전문 용어를 최소화한 쉬운 한글로 작성하세요">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>

                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">2</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">생성한 새로운 보고서의 내용을 기존_보고서.docx 문서의 마지막 행에 줄바꿈을 하고 추가하세요.<br><br>
                            #Guideline<br>
                            문서 추가 과정에서 다음 사항을 준수하세요<br>
                            일관된 구조와 형식 유지: 기존 보고서의 형식과 스타일을 추가되는 내용에도 반영하세요<br><br>
                            #문서 생성<br>
                            최종 결과를 Word 파일로 출력하세요</p>
                        </div>
                        <div class="flex-shrink-0 ml-4">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="생성한 새로운 보고서의 내용을 기존_보고서.docx 문서의 마지막 행에 줄바꿈을 하고 추가하세요.

#Guideline
문서 추가 과정에서 다음 사항을 준수하세요
일관된 구조와 형식 유지: 기존 보고서의 형식과 스타일을 추가되는 내용에도 반영하세요

#문서 생성
최종 결과를 Word 파일로 출력하세요">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                </div>
                <div class="mt-6 text-base">
                    <p class="bg-yellow-100 p-3 rounded-lg text-black" style="font-size: 1.25rem;">다음 파일을 첨부하세요:<br>
                    * 실습파일 폴더 > 10. 리포트 생성 > 보고서_템플릿.docx<br>
                    * 실습파일 폴더 > 10. 리포트 생성 > 기존_보고서.docx<br>
                    * 실습파일 폴더 > 1. 챗GPT를 이용한 금융시장조사 및 트렌드 분석 > 240829_엔비디아_Comment_vF.pdf<br>
                    * 실습파일 폴더 > 1. 챗GPT를 이용한 금융시장조사 및 트렌드 분석 > NH투자증권_삼성전자_20240731213651.pdf</p>
                </div>
            </div>
        </div>
    </div>
</div>ㅇ`,
        `
        <div class="bg-blue-600 flex flex-col h-screen">
            <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">이디오그램과 Canva로 이미지 생성</h2>
            <div class="flex-grow overflow-auto">
                <div class="space-y-6 px-8">
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <div class="space-y-6">
                            <div class="flex items-stretch">
                                <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">1</div>
                                <div class="flex-grow">
                                    <div class="flex items-center mb-2">
                                        <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                                            <img src="./images/chatgpt.png" alt="ChatGPT" class="w-6 h-6">
                                        </div>
                                        <span class="text-xl font-bold">ChatGPT</span>
                                    </div>
                                    <p class="mb-2 text-lg" style="font-size: 1.25rem;">첨부된 파일은 NH투자증권의 로고 이미지입니다.<br>1. 이미지를 분석하여 브랜드 컬러를 추출하세요.<br>2. 추출된 브랜드 컬러를 바탕으로 '투자상품 고객 설명회 안내장' 배경 이미지 생성 프롬프트를 작성하세요.<br><br>다음의 지침을 따르세요.<br>- 프롬프트는 영어로 작성해 주세요.<br>- Dall-E 3을 사용한 이미지 출력은 필요하지 않습니다.</p>
                                </div>
                                <div class="flex-shrink-0 ml-4 h-full">
                                    <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                            data-copy-text="첨부된 파일은 NH투자증권의 로고 이미지입니다.
        1. 이미지를 분석하여 브랜드 컬러를 추출하세요.
        2. 추출된 브랜드 컬러를 바탕으로 '투자상품 고객 설명회 안내장' 배경 이미지 생성 프롬프트를 작성하세요.
        
        다음의 지침을 따르세요.
        - 프롬프트는 영어로 작성해 주세요.
        - Dall-E 3을 사용한 이미지 출력은 필요하지 않습니다.">
                                        <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                        복사하기
                                    </button>
                                </div>
                            </div>
                            <div class="flex items-stretch">
                                <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">2</div>
                                <div class="flex-grow">
                                    <div class="flex items-center mb-2">
                                        <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                                            <img src="./images/ideogram.png" alt="Ideogram" class="w-6 h-6">
                                        </div>
                                        <span class="text-xl font-bold">Ideogram</span>
                                    </div>
                                    <p class="mb-2 text-lg text-gray-500" style="font-size: 1.25rem;">(Ideogram에 접속하여 [Step1]에서 생성된 프롬프트를 사용하세요.) 또는 아래의 프롬프트를 사용하세요.</p>
                                    <p class="mb-2 text-lg" style="font-size: 1.25rem;">Create a professional and inviting background image for a customer seminar invitation on investment products. The background should feature the colors yellow (#FFD100) and blue (#0072CE) prominently. Use smooth gradients and abstract shapes to convey trust and stability. The design should be modern and clean, with ample white space for text overlay. Incorporate subtle financial or investment-themed icons, like graphs, charts, or growth symbols, in a way that does not distract from the main content. The image should be suitable for both digital and print formats.</p>
                                </div>
                                <div class="flex-shrink-0 ml-4 h-full">
                                    <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                            data-copy-text="Create a professional and inviting background image for a customer seminar invitation on investment products. The background should feature the colors yellow (#FFD100) and blue (#0072CE) prominently. Use smooth gradients and abstract shapes to convey trust and stability. The design should be modern and clean, with ample white space for text overlay. Incorporate subtle financial or investment-themed icons, like graphs, charts, or growth symbols, in a way that does not distract from the main content. The image should be suitable for both digital and print formats.">
                                        <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                        복사하기
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="mt-6 text-base">
                            <p class="bg-yellow-100 p-3 rounded-lg text-black" style="font-size: 1.25rem;">다음 파일을 첨부하세요:<br>실습파일 폴더 > 9. NH투자증권 로고 > NH투자증권 logo.png</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `,
];

// 슬라이드 제목 추출 함수
function extractSlideTitle(slideContent) {
    const titleMatch = slideContent.match(/<h2[^>]*>(.*?)<\/h2>/);
    return titleMatch ? titleMatch[1] : `슬라이드 ${i}`;
}

// 복사 버튼 이벤트 리스너 설정 함수
function setupCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-button');
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const textToCopy = button.getAttribute('data-copy-text');
            copyToClipboard(textToCopy, button);
        });
    });
}

// 슬라이드 로드 함수 수정
function loadSlide(slideNumber) {
    console.log(`Loading slide ${slideNumber}`);
    const slideContent = slides[slideNumber - 1]; // 배열은 0부터 시작하므로 1을 빼줍니다
    if (slideContent) {
        // 여기서 제목과 본문의 여백을 늘리고 제목을 가운데 정렬합니다
        const modifiedContent = slideContent.replace(
            /<h2 class="(.*?)"/,
            '<h2 class="$1 text-center mb-8 mt-4"'
        );
        document.getElementById('slide').innerHTML = modifiedContent;
        console.log(`Slide ${slideNumber} content loaded`);
        setupCopyButtons(); // 슬라이드 로드 후 복사 버튼 설정
        updateSlideList(); // 슬라이드 로드 후 목차 업데이트
    } else {
        console.log(`Slide ${slideNumber} not found`);
        document.getElementById('slide').innerHTML = `
            <div class="flex items-center justify-center h-screen">
                <p style="font-size: 1.5rem;">Error: Slide ${slideNumber} not found</p>
                                    </div>
        `;
    }
}

// 복사 기능 추가
function copyToClipboard(text, buttonElement) {
    navigator.clipboard.writeText(text).then(() => {
        // 팝업 생성
        const popup = document.createElement('div');
        popup.innerHTML = `
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
            <span style="font-size: 1.5rem;">복사됨!</span>
        `;
        popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 20px 40px;
            border-radius: 10px;
            font-size: 24px;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
        `;
        document.body.appendChild(popup);

        // 애니메이션 위한 스타일 추가
        const style = document.createElement('style');
        style.textContent = `
            .checkmark {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: block;
                stroke-width: 2;
                stroke: #fff;
                stroke-miterlimit: 10;
                box-shadow: inset 0px 0px 0px #7ac142;
                animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
            }
            .checkmark__circle {
                stroke-dasharray: 166;
                stroke-dashoffset: 166;
                stroke-width: 2;
                stroke-miterlimit: 10;
                stroke: #7ac142;
                fill: none;
                animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
            }
            .checkmark__check {
                transform-origin: 50% 50%;
                stroke-dasharray: 48;
                stroke-dashoffset: 48;
                animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
            }
            @keyframes stroke {
                100% {
                    stroke-dashoffset: 0;
                }
            }
            @keyframes fill {
                100% {
                    box-shadow: inset 0px 0px 0px 30px #7ac142;
                }
            }
            @keyframes scale {
                0%, 100% {
                    transform: none;
                }
                50% {
                    transform: scale3d(1.1, 1.1, 1);
                }
            }
        `;
        document.head.appendChild(style);

        // 2초 후 팝업 제거
        setTimeout(() => {
            document.body.removeChild(popup);
            document.head.removeChild(style);
        }, 2000);
    }).catch(err => {
        console.error('복사 실패:', err);
        alert('복사에 실패했습니다.');
    });
}

// 초기 슬라이드 로드 및 이벤트 리스너 설정
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, loading initial slide');
    loadSlide(currentSlide);
    updateSlideList(); // 목차 업데이트
    setupCopyButtons(); // 초기 로드 시 복사 버튼 설정
});

// document.getElementById('prevSlide').addEventListener('click', () => {
//     console.log('Previous slide button clicked');
//     if (currentSlide > 1) {
//         currentSlide--;
//         loadSlide(currentSlide);
//     }
// });

// document.getElementById('nextSlide').addEventListener('click', () => {
//     console.log('Next slide button clicked');
//     if (currentSlide < totalSlides) {
//         currentSlide++;
//         loadSlide(currentSlide);
//     }
// });

// 슬라이드 목록 생성 함수 수정
function updateSlideList() {
    const slideList = document.getElementById('slideList');
    slideList.innerHTML = ''; // 기존 목록 초기화

    // 상단 고정 링크 컨테이너 생성
    const fixedLinksContainer = document.createElement('div');
    fixedLinksContainer.classList.add('fixed-links-container');
    fixedLinksContainer.style.cssText = `
        position: sticky;
        top: 0;
        background-color: white;
        padding: 10px;
        border-bottom: 1px solid #ccc;
        z-index: 100;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 10px;
    `;

    // 외부 링크 추가
    fixedLinksContainer.innerHTML = `
        <a href="https://gamma.app" target="_blank" style="font-size: 1.25rem; color: #3b82f6; text-decoration: none;">Gamma</a>
        <a href="https://suno.ai" target="_blank" style="font-size: 1.25rem; color: #3b82f6; text-decoration: none;">Suno AI</a>
        <a href="https://www.perplexity.ai" target="_blank" style="font-size: 1.25rem; color: #3b82f6; text-decoration: none;">Perplexity</a>
        <a href="https://ideogram.ai" target="_blank" style="font-size: 1.25rem; color: #3b82f6; text-decoration: none;">Ideogram</a>
    `;

    slideList.appendChild(fixedLinksContainer);

    // 나머지 슬라이드 목록 생성
    for (let i = 0; i < slides.length; i++) {
        const li = document.createElement('li');
        li.classList.add('slide-item');
        li.style.fontSize = '1.25rem'; // 목차 항목 폰트 크기 증가
        
        // 현재 슬라이드 강조
        if (i + 1 === currentSlide) {
            li.classList.add('current-slide');
            li.style.backgroundColor = '#e0e7ff'; // 연한 파란색 배경
            li.style.fontWeight = 'bold';
        }
        
        const numberSpan = document.createElement('span');
        numberSpan.classList.add('slide-number');
        numberSpan.textContent = i + 1;
        numberSpan.style.fontSize = '1.5rem'; // 슬라이드 번호 폰트 크기 증가
        
        const titleSpan = document.createElement('span');
        titleSpan.classList.add('slide-title');
        titleSpan.textContent = extractSlideTitle(slides[i]);
        titleSpan.style.fontSize = '1.25rem'; // 슬라이드 제목 폰트 크기 증가
        
        const previewDiv = document.createElement('div');
        previewDiv.classList.add('slide-preview');
        const previewContent = document.createElement('div');
        previewContent.classList.add('slide-preview-content');
        previewContent.innerHTML = slides[i];
        previewContent.style.fontSize = '1rem'; // 미리보기 내용 폰트 크기 증가
        previewDiv.appendChild(previewContent);
        
        li.appendChild(numberSpan);
        li.appendChild(titleSpan);
        li.appendChild(previewDiv);
        
        li.addEventListener('click', () => {
            currentSlide = i + 1;
            loadSlide(currentSlide);
            updateSlideList(); // 목차 업데이트
        });
        slideList.appendChild(li);
    }
}

// 사이드바 기능 등 기존 코드는 그대로 유지...

// 사이드바 토글 기능
document.getElementById('toggleSidebar').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('closed');
    if (sidebar.classList.contains('closed')) {
        document.getElementById('toggleTOC').style.display = 'none';
    } else {
        document.getElementById('toggleTOC').style.display = 'flex';
    }
    document.getElementById('toggleSidebar').style.fontSize = '1.5rem'; // 토글 버튼 폰트 크기 증가
});

// 목차 토글 기능
document.getElementById('toggleTOC').addEventListener('click', () => {
    const slideList = document.getElementById('slideList');
    slideList.classList.toggle('hidden');
    const toggleIcon = document.getElementById('toggleIcon');
    toggleIcon.textContent = slideList.classList.contains('hidden') ? '▼' : '▲';
    toggleIcon.style.fontSize = '1.5rem'; // 토글 아이콘 크기 증가
});

// ... (기존 코드 유지)

function copyToClipboard(text, buttonElement) {
    navigator.clipboard.writeText(text).then(() => {
        // 팝업 생성
        const popup = document.createElement('div');
        popup.innerHTML = `
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
            <span style="font-size: 1.5rem;">복사됨!</span>
        `;
        popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 20px 40px;
            border-radius: 10px;
            font-size: 24px;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
        `;
        document.body.appendChild(popup);

        // 애니메이션 위한 스타일 추가
        const style = document.createElement('style');
        style.textContent = `
            .checkmark {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: block;
                stroke-width: 2;
                stroke: #fff;
                stroke-miterlimit: 10;
                box-shadow: inset 0px 0px 0px #7ac142;
                animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
            }
            .checkmark__circle {
                stroke-dasharray: 166;
                stroke-dashoffset: 166;
                stroke-width: 2;
                stroke-miterlimit: 10;
                stroke: #7ac142;
                fill: none;
                animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
            }
            .checkmark__check {
                transform-origin: 50% 50%;
                stroke-dasharray: 48;
                stroke-dashoffset: 48;
                animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
            }
            @keyframes stroke {
                100% {
                    stroke-dashoffset: 0;
                }
            }
            @keyframes fill {
                100% {
                    box-shadow: inset 0px 0px 0px 30px #7ac142;
                }
            }
            @keyframes scale {
                0%, 100% {
                    transform: none;
                }
                50% {
                    transform: scale3d(1.1, 1.1, 1);
                }
            }
        `;
        document.head.appendChild(style);

        // 2초 후 팝업 제거
        setTimeout(() => {
            document.body.removeChild(popup);
            document.head.removeChild(style);
        }, 2000);
    }).catch(err => {
        console.error('복사 실패:', err);
        alert('복사에 실패했습니다.');
    });
}

// 초기 슬라이드 로드 및 이벤트 리스너 설정
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, loading initial slide');
    loadSlide(currentSlide);
    updateSlideList(); // 목차 업데이트
    setupCopyButtons(); // 초기 로드 시 복사 버튼 설정
});

document.getElementById('prevSlide').addEventListener('click', () => {
    console.log('Previous slide button clicked');
    if (currentSlide > 1) {
        currentSlide--;
        loadSlide(currentSlide);
    }
});

document.getElementById('nextSlide').addEventListener('click', () => {
    console.log('Next slide button clicked');
    if (currentSlide < totalSlides) {
        currentSlide++;
        loadSlide(currentSlide);
    }
});

// 슬라이드 목록 생성 함수 수정
function updateSlideList() {
    const slideList = document.getElementById('slideList');
    slideList.innerHTML = ''; // 기존 목록 초기화

    // 상단 고정 링크 컨테이너 생성
    const fixedLinksContainer = document.createElement('div');
    fixedLinksContainer.classList.add('fixed-links-container');
    fixedLinksContainer.style.cssText = `
        position: sticky;
        top: 0;
        background-color: white;
        padding: 10px;
        border-bottom: 1px solid #ccc;
        z-index: 100;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 10px;
    `;

    // 외부 링크 추가
    fixedLinksContainer.innerHTML = `
        <a href="https://gamma.app" target="_blank" style="font-size: 1.25rem; color: #3b82f6; text-decoration: none;">Gamma</a>
        <a href="https://suno.ai" target="_blank" style="font-size: 1.25rem; color: #3b82f6; text-decoration: none;">Suno AI</a>
        <a href="https://www.perplexity.ai" target="_blank" style="font-size: 1.25rem; color: #3b82f6; text-decoration: none;">Perplexity</a>
        <a href="https://ideogram.ai" target="_blank" style="font-size: 1.25rem; color: #3b82f6; text-decoration: none;">Ideogram</a>
    `;

    slideList.appendChild(fixedLinksContainer);

    // 나머지 슬라이드 목록 생성
    for (let i = 0; i < slides.length; i++) {
        const li = document.createElement('li');
        li.classList.add('slide-item');
        li.style.fontSize = '1.25rem'; // 목차 항목 폰트 크기 증가
        
        // 현재 슬라이드 강조
        if (i + 1 === currentSlide) {
            li.classList.add('current-slide');
            li.style.backgroundColor = '#e0e7ff'; // 연한 파란색 배경
            li.style.fontWeight = 'bold';
        }
        
        const numberSpan = document.createElement('span');
        numberSpan.classList.add('slide-number');
        numberSpan.textContent = i;
        numberSpan.style.fontSize = '1.5rem'; // 슬라이드 번호 폰트 크기 증가
        
        const titleSpan = document.createElement('span');
        titleSpan.classList.add('slide-title');
        titleSpan.textContent = extractSlideTitle(slides[i]);
        titleSpan.style.fontSize = '1.25rem'; // 슬라이드 제목 폰트 크기 증가
        
        const previewDiv = document.createElement('div');
        previewDiv.classList.add('slide-preview');
        const previewContent = document.createElement('div');
        previewContent.classList.add('slide-preview-content');
        previewContent.innerHTML = slides[i];
        previewContent.style.fontSize = '1rem'; // 미리보기 내용 폰트 크기 증가
        previewDiv.appendChild(previewContent);
        
        li.appendChild(numberSpan);
        li.appendChild(titleSpan);
        li.appendChild(previewDiv);
        
        li.addEventListener('click', () => {
            currentSlide = i + 1;
            loadSlide(currentSlide);
            updateSlideList(); // 목차 업데이트
        });
        slideList.appendChild(li);
    }
}

// 사이드바 기능 등 기존 코드는 그대로 유지...

// 사이드바 토글 기능
document.getElementById('toggleSidebar').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('closed');
    if (sidebar.classList.contains('closed')) {
        document.getElementById('toggleTOC').style.display = 'none';
    } else {
        document.getElementById('toggleTOC').style.display = 'flex';
    }
    document.getElementById('toggleSidebar').style.fontSize = '1.5rem'; // 토글 버튼 폰트 크기 증가
});

// 목차 토글 기능
document.getElementById('toggleTOC').addEventListener('click', () => {
    const slideList = document.getElementById('slideList');
    slideList.classList.toggle('hidden');
    const toggleIcon = document.getElementById('toggleIcon');
    toggleIcon.textContent = slideList.classList.contains('hidden') ? '▼' : '▲';
    toggleIcon.style.fontSize = '1.5rem'; // 토글 아이콘 크기 증가
});

function extractSlideData() {
    const slideData = slides.map((slide, index) => {
      // Create temporary div to parse HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = slide;
      
      // Extract title
      const title = tempDiv.querySelector('h2')?.textContent?.trim() || '';
      
      // Extract prompts
      const prompts = Array.from(tempDiv.querySelectorAll('.copy-button')).map(button => {
        const promptContainer = button.closest('.flex');
        // Get text from p tag and replace <br> with newlines
        const pElement = promptContainer?.querySelector('.flex-grow p');
        const displayText = pElement ? pElement.innerHTML
          .replace(/<br\s*\/?>/g, '\n')  // Replace <br> with newline
          .replace(/<[^>]*>/g, '')       // Remove any other HTML tags
          .trim() : '';
        const copyText = button.getAttribute('data-copy-text') || '';
        
        return {
          displayText,
          copyText
        };
      });
  
      return {
        slideNumber: index + 1,
        title,
        prompts
      };
    });
  
    console.log(JSON.stringify(slideData, null, 2));
  }