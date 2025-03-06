import Link from "next/link";
import {
  GitBranchPlus,
  GitFork,
  GitMerge,
  Network,
  Settings2,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-primary">
          AI Resume Analysis Methods
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sequential Processing Card */}
          <Link
            href="/chains"
            className="group block p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors"
          >
            <div className="flex items-start gap-4">
              <GitBranchPlus className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-3 text-primary group-hover:text-primary/80">
                  Sequential Processing (Chains)
                </h2>
                <p className="text-muted-foreground">
                  Upload your resume and let the AI agent analyze it sequentially to provide you with
                  insights on your skills, experience, and strengths.
                </p>
              </div>
            </div>
          </Link>

          {/* Routing Card */}
          <Link
            href="/routing"
            className="group block p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors"
          >
            <div className="flex items-start gap-4">
              <GitFork className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-3 text-primary group-hover:text-primary/80">
                  Routing
                </h2>
                <p className="text-muted-foreground">
                  Upload your resume and let the AI agent intelligently route analysis tasks to provide you with
                  comprehensive insights.
                </p>
              </div>
            </div>
          </Link>

          {/* Parallel Processing Card */}
          <Link
            href="/parallel"
            className="group block p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors"
          >
            <div className="flex items-start gap-4">
              <GitMerge className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-3 text-primary group-hover:text-primary/80">
                  Parallel Processing
                </h2>
                <p className="text-muted-foreground">
                  Upload your resume and let multiple AI agents analyze it simultaneously for faster,
                  multi-faceted insights.
                </p>
              </div>
            </div>
          </Link>

          {/* Orchestrator-Worker Card */}
          <Link
            href="/orch-worker"
            className="group block p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors"
          >
            <div className="flex items-start gap-4">
              <Network className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-3 text-primary group-hover:text-primary/80">
                  Orchestrator-Worker
                </h2>
                <p className="text-muted-foreground">
                  Upload your resume and let a coordinated team of AI agents work together to provide
                  detailed analysis and insights.
                </p>
              </div>
            </div>
          </Link>

          {/* Evaluator-Optimizer Card */}
          <Link
            href="/eval-opt"
            className="group block p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors"
          >
            <div className="flex items-start gap-4">
              <Settings2 className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-3 text-primary group-hover:text-primary/80">
                  Evaluator-Optimizer
                </h2>
                <p className="text-muted-foreground">
                  Upload your resume and let AI agents evaluate and optimize your resume content for
                  maximum impact.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}