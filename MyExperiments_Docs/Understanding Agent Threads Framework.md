In the video, **Agent Threads** (or **Thread-Based Engineering**) is a mental framework introduced by IndyDevDan to help engineers measure and scale their productivity when working with AI agents \[[01:49](http://www.youtube.com/watch?v=-WBHNFAB0OE&t=109)\].

A "thread" is defined as a unit of engineering work over time driven by you and your agents \[[02:01](http://www.youtube.com/watch?v=-WBHNFAB0OE&t=121)\]. It typically consists of three stages:

1. **Prompt/Plan:** You initiate the work \[[02:14](http://www.youtube.com/watch?v=-WBHNFAB0OE&t=134)\].  
2. **Tool Calls:** The agent performs the work (reading code, making requests, etc.) \[[02:22](http://www.youtube.com/watch?v=-WBHNFAB0OE&t=142)\].  
3. **Review/Validation:** You verify the output \[[02:34](http://www.youtube.com/watch?v=-WBHNFAB0OE&t=154)\].

### **The 6 Main Types of Threads**

The video outlines a hierarchy of threads that represent increasing levels of engineering maturity:

* **Base Thread:** A single unit of work where you prompt and then review \[[03:55](http://www.youtube.com/watch?v=-WBHNFAB0OE&t=235)\].  
* **P-Thread (Parallel):** Running multiple agents simultaneously in different terminals or tabs to get more done at once \[[04:13](http://www.youtube.com/watch?v=-WBHNFAB0OE&t=253)\].  
* **C-Thread (Chained):** Breaking a large, high-risk task into sequential phases with manual checkpoints between them \[[09:08](http://www.youtube.com/watch?v=-WBHNFAB0OE&t=548)\].  
* **F-Thread (Fusion):** Sending the same prompt to multiple different models (e.g., Claude, Gemini, GPT) and combining the best parts of their answers \[[11:33](http://www.youtube.com/watch?v=-WBHNFAB0OE&t=693)\].  
* **B-Thread (Big):** A meta-structure where one agent manages and prompts other sub-agents to complete complex tasks \[[15:23](http://www.youtube.com/watch?v=-WBHNFAB0OE&t=923)\].  
* **L-Thread (Long):** High-autonomy workflows that run for hours or days, performing hundreds of tool calls with minimal human intervention \[[19:10](http://www.youtube.com/watch?v=-WBHNFAB0OE&t=1150)\].

### **How to Measure Improvement**

According to the framework, you know you are improving as an "Agentic Engineer" if you can \[[23:19](http://www.youtube.com/watch?v=-WBHNFAB0OE&t=1399)\]:

* Run **more** threads at once.  
* Run **longer** threads (higher autonomy).  
* Run **thicker** threads (more complex nested tasks).  
* Require **fewer** human-in-the-loop checkpoints (higher trust).

The video also briefly mentions the **Ralph Wiggum pattern**, which is a technique for looping an agent over a problem until it is solved, effectively extending the length of a thread \[[18:17](http://www.youtube.com/watch?v=-WBHNFAB0OE&t=1097)\].

